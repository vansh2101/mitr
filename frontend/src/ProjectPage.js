import React, { useState, useRef, useEffect } from "react";
import './main.css'

import Editor from '@monaco-editor/react';

import bot from '../src/assets/bot.svg';
import logo from '../src/assets/logo.png';
import folder from '../src/assets/folder.svg';
import debug from '../src/assets/debug.svg';
import run from '../src/assets/run.svg';
import search from '../src/assets/search.svg';
import vector from '../src/assets/vector.svg';
// import LanguageIcon from '../src/assets/LanguageIcon.png';

import { IoIosArrowForward } from "react-icons/io";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

import BotPanel from "./components/BotPanel";
import ImagePanel from "./components/ImagePanel";

import { query, query_complete } from "./scripts/codeAssistant";

var files = {
    "script.js": {
        name: "script.js",
        language: 'javascript',
        value: "// Welcome to JavaScript",
    },
    "index.html": {
        name: "index.html",
        language: 'html',
        value: "<!-- Welcome to HTML -->"
    },
    "styles.css": {
        name: "styles.css",
        language: 'css',
        value: "/* Welcome to CSS */"
    }
};

function ProjectPage() {

    // query({"inputs": "write javascript code to add 2 numbers"}).then((response) => {
    //     console.log(JSON.stringify(response));
    // });

    const [fileName, setFileName] = useState("script.js");
    const file = files[fileName];
    const editorRef = useRef(null);
    const [isBotPanelVisible, setBotPanelVisibility] = useState(false);
    const [isImagePanelVisible, setImagePanelVisibility] = useState(false);
    const [folderData, setFolderData] = useState([
        {
            name: 'Folder 1',
            files: ['File 1.1', 'File 1.2', 'File 1.3'],
        },
        {
            name: 'Folder 2',
            files: ['File 2.1', 'File 2.2'],
        },
        {
            name: 'Folder 3',
            files: ['File 3.1'],
        },
        {
            name: 'Folder 4',
            files: ['File 4.1', 'File 4.2', 'File 4.3'],
        },
        {
            name: 'Folder 5',
            files: ['File 5.1', 'File 5.2', 'File 5.3', 'File 5.4', 'File 5.5'],
        },
    ]);

    const [botPanelInput, setBotPanelInput] = useState('');
    const [inputVal, setInputVal] = useState('');
    const [msgs, setMsgs] = useState([{role: 'bot', msg: 'Hello!'}]);

    const [isLeftPanelVisible, setLeftPanelVisibility] = useState(true);

    const toggleLeftPanel = () => {
        setLeftPanelVisibility(!isLeftPanelVisible);
    };

    const toggleFilesVisibility = (index) => {
        const updatedFolders = [...folderData];
        updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
        setFolderData(updatedFolders);
    };

    const closeAllFolders = () => {
        const updatedFolders = folderData.map((folder) => ({ ...folder, isOpen: false }));
        setFolderData(updatedFolders);
    };

    const toggleBotPanel = () => {
        setMsgs([{role: 'bot', msg: 'Hello!'}])
        setBotPanelVisibility(!isBotPanelVisible);
    }
    
    const toggleImagePanel = () => {
        setImagePanelVisibility(!isImagePanelVisible);
    }


    const ask_gpt = () => {
        fetch('http://localhost:8000/assistant/msg', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"prompt": botPanelInput}),
        }).then(res => res.json())
        .then(data => {
            setMsgs([...msgs, {role: 'user', msg: botPanelInput}, {role: 'bot', msg: data}])
            setBotPanelInput('')
        })
    }

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
      }

    const ask_assistant = () => {
        query({"inputs": inputVal}).then((response) => {
            console.log(response)
            const res = JSON.stringify(response[0].generated_text).slice(inputVal.length + 1, );
            if (res.slice(0,2) !== '\n' || res.slice(0,2) !== '``') {
                var result = '//' + res
            }

            result = result.replace(/\\n/g, '\n').replace(/```/g, '//').replace(/\\/g, '');
            editorRef.current.setValue(result);
        });
    }

    const complete_code = (event) => {
        if (event.keyCode !== 9) { return }

        query_complete({"inputs": editorRef.current.getValue()}).then((response) => {
            console.log(response)
            const res = JSON.stringify(response[0].generated_text);

            const result = res.replace(/\\n/g, '\n').replace(/```/g, '//').replace(/\\/g, '');

            editorRef.current.setValue(result);
            console.log(response);
        });
        // alert('code changed')
    }

    useEffect(() => {
        document.addEventListener('keydown', complete_code)
    }, [])

    return (
        <div className="main h-screen w-screen">


            {/* Navigation Menu */}
            <nav className="navigation-menu flex flex-row pt-[3.156vh]">

                <img className="logo w-[3.7682vw] h-[6.1804vh] ml-[2.843vw]" src={logo} alt="logo" />
                <div className="project w-[15.54vw] ml-[1.190vw] flex items-center justify-center cursor-pointer">
                    <img src={vector} alt="vector" />
                    <p className="pl-[1.190vw]">Sample Project</p>
                </div>
                <div onClick={toggleLeftPanel} className="folder-1 w-[3.042vw] ml-[2.513vw] p-[0.727vw] flex items-center justify-center cursor-pointer">
                    <img className="w-[1.653vw]" src={folder} alt="folder" />
                </div>
                <div onClick={toggleImagePanel} className="folder-2 w-[3.042vw] ml-[1.190vw] p-[0.727vw] flex items-center justify-center cursor-pointer">
                    <FaImage className="w-[1.653vw] text-[#8BC3EB]" size={23}/>
                </div>
                <div onClick={toggleBotPanel} className="bot w-[3.042vw] ml-[1.190vw] p-[0.727vw] flex items-center justify-center cursor-pointer">
                    <img className="w-[1.653vw]" src={bot} alt="bot" />
                </div>
                <div className="debug w-[3.042vw] ml-[0.925vw] p-[0.727vw] flex items-center justify-center cursor-pointer">
                    <img className="w-[1.653vw]" src={debug} alt="debug" />
                </div>
                <div className="search ml-[1.190vw] w-[44.576vw] flex items-center">
                    <img onClick={ask_assistant} className="pl-[1.256vw] cursor-pointer" src={search} alt="search" />
                    <input className="search-field text-white w-[39.880vw] h-[2.443vh] ml-[0.859vw]" placeholder="Type commands here..." value={inputVal} onChange={e => setInputVal(e.target.value)} />
                </div>
                <div className="run ml-[1.388vw] w-[8.399vw] pl-[1.719vw] pr-[0.992vw] flex items-center justify-center cursor-pointer">
                    <img src={run} alt="run" />
                    <p className="pl-[1.190vw]">Run</p>
                </div>

            </nav>

            <div className="panelContainer w-full mt-[2.138vh] ml-[2.843vw] flex h-[84.215vh]">
                {/* Left panel */}
                <div className="leftPanel w-[17.129vw] h-[84.215vh]">
                    <div className="left-header h-[5.091vh] flex items-center text-white bg-[#2D2D2D]">
                        <span className="ml-[1.190vw]">Explorer</span>
                        <FiMinusSquare onClick={closeAllFolders} className="text-white opacity-60 ml-[9vw] cursor-pointer" />
                    </div>
                    <hr className="opacity-90 border-t-[1px] border-solid border-[#3D3D3D]" />
                    {folderData.map((folder, index) => (
                        <div key={index}>
                            <div
                                className="left-header-content h-[4.091vh] flex items-center text-white cursor-pointer ml-[2px]"
                                onClick={() => toggleFilesVisibility(index)}
                            >
                                <IoIosArrowForward
                                    className={`text-white opacity-60 ml-1 transform ${folder.isOpen ? 'rotate-90' : ''
                                        }`}
                                />
                                <span className="text-white opacity-60 ml-1">{folder.name}</span>
                            </div>
                            {folder.isOpen && (
                                <>
                                    {folder.files.map((file, fileIndex) => (
                                        <div
                                            key={fileIndex}
                                            className="file-box flex items-center ml-[5px] mr-[5px] mb-[5px] cursor-pointer"
                                        >
                                            <span className="text-white opacity-60 ml-6">{file}</span>
                                        </div>
                                    ))}
                                </>
                            )}
                            <hr className="opacity-40 border-t-[1px] border-solid border-[#3D3D3D]" />
                        </div>
                    ))}
                </div>

                {/* Right panel */}
                <div className={`rightPanel ${(isBotPanelVisible || isImagePanelVisible) ? 'w-[43.25vw]' : 'w-[76.058vw]'} h-[84.215vh] ml-[1.058vw]`}>
                    <div className="right-header h-[5.091vh] flex items-center">
                        <button className="JavaScript ml-[1.190vw]" onClick={() => setFileName("script.js")}>App.js</button>
                        <button className="HTML ml-[1.190vw]" onClick={() => setFileName("index.html")}>Index.html</button>
                        <button className="CSS ml-[1.190vw]" onClick={() => setFileName("styles.css")}>Styles.css</button>
                        <FaRegSave onClick={() => console.log('Saved!')} className={`text-white opacity-60 ${(isBotPanelVisible || isImagePanelVisible) ? 'ml-[16.5vw]' : 'ml-[55vw]'} cursor-pointer`} size={25} />
                    </div>
                    <div className="editor mt-3">
                        <Editor height="75.105vh" theme="vs-dark" path={file.name} defaultLanguage={file.language} defaultValue={file.value} onMount={handleEditorDidMount} onChange={complete_code} />
                    </div>
                </div>
            </div>

            {/* Bot Panel */}
            {isBotPanelVisible && <BotPanel value={botPanelInput} setValue={setBotPanelInput} onSend={ask_gpt} msgs={msgs} />}
            {isImagePanelVisible && <ImagePanel onClose={toggleImagePanel} />}

        </div>
    );
}

export default ProjectPage;