import React, { useState, useRef, useEffect } from 'react'
import Btn from './components/Btn'
import logo from '../src/assets2/logo.png';
// import mobile from '../src/assets2/mobile.png'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { code_completion, ask_gpt, img_2_code, text_2_code, debug_code } from './scripts/codeAssistant';
import SpotLightModal from './components/modals/SpotLightModal';

//? Icons
import { IoBugOutline } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBug, FaChevronRight, FaCode, FaFile, FaFolder, FaImage, FaPlus, FaSearch } from "react-icons/fa";
import { GoDependabot, GoDotFill } from "react-icons/go";
import { MdLibraryAddCheck } from "react-icons/md";
import { LuFileCode2 } from "react-icons/lu";

function Workspace() {

    const editorRef = useRef(null);

    const [folderData, setFolderData] = useState([
        {
            name: 'public',
            files: ['bg.png', 'icon.png'],
        },
        {
            name: 'node_modules',
            files: [],
        },
        {
            name: 'src',
            files: ['index.js', 'App.js', 'Workspace.js'],
        },
        {
            name: 'styles',
            files: ['globals.css'],
        },
    ]);

    const [debugBox, setDebugBox] = useState(false);
    const [assistantBox, setAssistantBox] = useState(false);
    const [imgBox, setImgBox] = useState(false);
    const [generateBox, setGenerateBox] = useState(false);
    const [msgs, setMsgs] = useState([{ role: 'bot', msg: 'Hello, I am your assistant. How can I help you?' }]);
    const [msgInput, setMsgInput] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [ask, setAsk] = useState('');
    const [errors, setErrors] = useState([]);
    const [debugErrors, setDebugErrors] = useState([]);
    const [searchMsg, setSearchMsg] = useState('Errors are being searched...');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [isSpotLightModalOpen, setSpotLightModalOpen] = useState(false);

    // const openSpotLightModal = () => {
    //     setSpotLightModalOpen(true);
    //     console.log('Open CLicked!');
    // };

    // const closeSpotLightModal = () => {
    //     setSpotLightModalOpen(false);
    // };

    const toggleSpotLightModal = () => {
        setSpotLightModalOpen(!isSpotLightModalOpen);
    };

    const toggleFilesVisibility = (index) => {
        const updatedFolders = [...folderData];
        updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
        setFolderData(updatedFolders);

        document.getElementById(index).classList.toggle('rotate-90');
        document.getElementById(`file${index}`).classList.toggle('hidden');
    };

    const toggleErrorVisibility = (index) => {
        document.getElementById(`error${index}`).classList.toggle('rotate-90');
        document.getElementById(`error-para-${index}`).classList.toggle('hidden');
    };

    const toggleSearchInput = () => {
        setShowSearchInput(!showSearchInput);
    };

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    const complete_code = (event) => {
        if (event.keyCode !== 9) { return }

        code_completion(editorRef.current.getValue()).then((response) => {
            const result = response.replace(/\\n/g, '\n').replace(/```javascript/g, '').replace(/```/g, '');

            editorRef.current.setValue(result);
        });
    }

    const chat = () => {
        ask_gpt(msgInput).then((response) => {
            setMsgs([...msgs, { role: 'user', msg: msgInput }, { role: 'bot', msg: response }]);
            setMsgInput('');
        })
    }

    const send_msg = () => {
        setMsgs([...msgs, { role: 'user', msg: msgInput }]);
        chat();
    }

    const img_2_code_func = () => {
        img_2_code(URL.createObjectURL(selectedImage)).then((response) => {
            document.getElementById('image-output').innerHTML = response.toString();
            setSelectedImage(null)
        })
    }

    const text_2_code_func = () => {
        text_2_code(ask).then((response) => {
            editorRef.current.setValue(response.replace(/```javascript/g, '').replace(/```jsx/g, '').replace(/```/g, ''));
            setAsk('');
            setGenerateBox(false);
        })
    }

    const get_errors = (e) => {
        const err = e
        setErrors(err)
    }

    const onClickDebug = () => {
        setDebugBox(!debugBox);

        if (!debugBox) {
            setErrors('Errors are being searched...')
            setDebugErrors([])
            debug(errors)
        }
    }

    const debug = (err) => {
        console.log('started')
        const code = editorRef.current.getValue().split('\n')
        let arr = []
        err.map((error) => {
            debug_code(code[error.startLineNumber - 1]).then((response) => {
                const res = response.replace(/\\n/g, '\n').replace(/```javascript/g, 'Corrected Code:').replace(/```/g, '\nDescription:');
                arr.push({ line: error.startLineNumber, error: res })
            })
        })

        setDebugErrors(arr)
    }

    useEffect(() => {
        setSearchMsg('Errors!')
    }, [debugErrors])

    useEffect(() => {
        document.addEventListener('keydown', complete_code)
    }, [])

    return (
        <main className='flex flex-col bg-[#111111] w-full h-[100vh]'>

            <div className='flex px-4 py-2 gap-3 border-b border-[#ffffff]/20'>
                <Link to='/projects'>
                    <div className='border-r border-[#ffffff]/20 pr-5 mr-2'>
                        <img src={logo} className='aspect-square w-9' />
                    </div>
                </Link>
                <Btn text='Assistant' icon={<GoDependabot color='#111111' size={16} />} onClick={() => setAssistantBox(!assistantBox)} />
                <Btn text='Generate Code' icon={<FaCode color='#111111' size={16} className='opacity-75' />} onClick={() => setGenerateBox(!generateBox)} />
                <Btn text='Debug' icon={<IoBugOutline color='#111111' size={16} />} onClick={onClickDebug} />
                <Btn text='Image to Code ' icon={<FaImage color='#111111' size={16} className='opacity-75' />} onClick={() => setImgBox(!imgBox)} />
                <Btn text='Code Refactor ' icon={<LuFileCode2 color='#111111' size={16} className='opacity-75' />} >
                    {/* <img src={mobile} className='text-white' alt='mobile' /> */}
                </Btn>
                <Btn text='Test Case ' icon={<MdLibraryAddCheck color='#111111' size={16} className='opacity-75' />} />
            </div>

            <div className='flex flex-1'>
                <div className='w-[18%] h-full border-r border-[#ffffff]/20 box-border p-5'>
                    <div className='flex justify-between'>
                        {/* <div className='flex items-center gap-3 bg-[#242424] px-5 pr-8 py-1.5 text-[#808080] text-sm font-semibold rounded-md cursor-pointer border border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'>
                        <FaPlus size={14} />
                        Create New File
                    </div>

                      <div className='flex items-center gap-3 bg-[#242424] px-3 py-1.5 text-[#808080] rounded-md cursor-pointer border border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'>
                        <FaSearch />
                    </div> */}

                        {showSearchInput ? (
                            // Render search input field
                            <div className='flex items-center gap-3 bg-[#242424] px-5 pr-8 py-1.5 text-[#808080] text-sm font-semibold rounded-md cursor-pointer border w-[12.3vw] border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'>
                                {/* <FaSearch /> */}
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='bg-transparent border-none outline-none text-white placeholder:text-[#808080]'
                                />
                            </div>
                        ) : (
                            // Render "Create New File" section
                            <div className='flex items-center gap-3 bg-[#242424] px-5 pr-8 py-1.5 text-[#808080] text-sm font-semibold rounded-md cursor-pointer border w-[12.3vw] border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'>
                                <FaPlus size={14} />
                                Create New File
                            </div>
                        )}
                        {/* <div
                            className='flex items-center gap-3 bg-[#242424] px-3 py-1.5 text-[#808080] rounded-md cursor-pointer border border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'
                            onClick={toggleSearchInput}
                        > */}
                        <div
                            className='flex items-center gap-3 bg-[#242424] px-3 py-1.5 text-[#808080] rounded-md cursor-pointer border border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'
                            onClick={toggleSpotLightModal}
                        >
                            <FaSearch />
                        </div>
                    </div>

                    <h2 className='text-[#808080] text-lg font-semibold mt-4'>
                        Explorer
                    </h2>

                    <div className='mt-2'>
                        {folderData.map((folder, index) => (
                            <div key={index}>
                                <div
                                    className="left-header-content flex items-center justify-between px-3 pl-4 py-1.5 box-border text-white cursor-pointer mb-1 rounded-lg hover:bg-[#232323]"
                                    onClick={() => toggleFilesVisibility(index)}
                                >
                                    <div className='flex items-center gap-2'>
                                        <FaFolder size={14} fill='#FEFF3D' />
                                        <span className="text-white opacity-60 ml-1">{folder.name}</span>
                                    </div>

                                    <FaChevronRight size={14} color='#808080' id={index} className='duration-200' />
                                </div>

                                <div className='duration-200 hidden' id={`file${index}`}>
                                    {folder.files.map((file, fileIndex) => (
                                        <div
                                            key={fileIndex}
                                            className="file-box flex items-center gap-2 box-border px-9 py-[3px] cursor-pointer rounded-lg hover:bg-[#232323]"
                                        >
                                            <FaFile size={14} color='#12A9D9' />
                                            <span className="text-white opacity-60">{file}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1.5 h-full w-[15%] box-border p-2 pl-7 bg-[#1e1e1e75] text-[#808080] text-sm'>
                            <RiJavascriptFill fill='#FEFF3D' size={17} />
                            index.js
                        </div>

                        <p className='text-white/25 text-xs font-semibold mr-5'>Press Tab for code completion</p>
                    </div>

                    <div id='editor' className='flex-1 w-full py-1 bg-[#1e1e1e]'>
                        <Editor height={'100%'} width={'100%'} theme='vs-dark' defaultLanguage='javascript' defaultPath='index.js' defaultValue='//Welcome to Javascript' onMount={handleEditorDidMount} onValidate={e => get_errors(e)} />
                    </div>
                </div>
            </div>

            <div className={`absolute flex flex-col right-10 top-10 bg-[#282828] w-1/4 h-4/6 rounded-lg border border-white/30 ${!debugBox ? 'hidden' : ''}`}>
                <div className='w-full flex items-center justify-between box-border px-3 pr-5 py-2 border-b border-white/30 bg-[#353535] rounded-t-lg text-white/80 text-sm font-semibold'>
                    <div>
                        <img src='loader.gif' className='w-8 inline-block mr-3' />
                        {searchMsg}
                    </div>

                    <FaBug color='#808080' size={16} />
                </div>

                <div className='flex-1 overflow-y-auto'>
                    {debugErrors.map((item, index) =>
                        <>
                            <div className='flex items-center justify-between p-4 border-b border-white/30 cursor-pointer' onClick={() => { toggleErrorVisibility(index) }}>
                                <div className='flex items-center gap-2 text-white/80 font-semibold text-sm'>
                                    <GoDotFill color='#F46841' size={14} />
                                    Error Line {item.line}
                                </div>
                                <FaChevronRight size={14} color='#808080' id={`error${index}`} className='duration-200' />
                            </div>

                            <div className='px-4 py-3 box-border hidden' id={`error-para-${index}`}>
                                <pre className='text-white/60 text-[13px] break-words whitespace-pre-wrap'>
                                    {item.error}
                                </pre>
                            </div>
                        </>
                    )}
                </div>

                <div className='p-3 border-t border-white/30 bg-[#353535] rounded-b-lg text-sm font-semibold flex justify-center'>
                    <button className='w-11/12 bg-[#BCE613] py-1.5 rounded-md'>
                        Fix All Issues
                    </button>
                </div>
            </div>

            <div className={`absolute  flex flex-col right-10 top-10 bg-[#282828] w-1/4 h-4/6 rounded-lg border border-white/30 ${!assistantBox ? 'hidden' : ''}`}>
                <div className='w-full flex items-center gap-3 box-border p-3 border-b border-white/30 bg-[#353535] rounded-t-lg text-white/80 text-sm font-semibold'>

                    <GoDependabot color='#808080' size={18} />
                    Assistant

                </div>

                <div className='flex-1 overflow-y-auto overflow-x-hidden'>
                    {msgs.map((msg, index) =>
                        <>
                            {msg.role === 'bot' ?
                                <div className='flex justify-start'>
                                    <div className='bg-[#BCE613] w-4/5 ml-2 mt-2 box-border p-2 rounded-lg text-wrap break-words text-[#333333]/80 text-md'>
                                        <h1 className='font-bold uppercase text-xs text-[#333333]'>
                                            Bot
                                        </h1>

                                        {msg.msg}
                                    </div>
                                </div>
                                :
                                <div className='flex justify-end'>
                                    <div className='bg-[#353535] w-4/5 mr-2 mt-2 box-border p-2 rounded-lg text-wrap break-words text-white/60 text-md'>
                                        <h1 className='font-bold uppercase text-xs text-white/80'>
                                            User
                                        </h1>

                                        {msg.msg}
                                    </div>
                                </div>
                            }
                        </>
                    )}
                </div>

                <div className='p-3 border-t border-white/30 bg-[#353535] rounded-b-lg text-sm font-semibold flex justify-center'>
                    <input type='text' placeholder='Ask me anything' className='w-11/12 bg-[#282828] border border-white/30 rounded-l-md p-2 text-white/80 text-sm font-semibold outline-none' value={msgInput} onChange={e => setMsgInput(e.target.value)} />
                    <button className='w-1/5 bg-[#BCE613] py-1.5 rounded-r-md' onClick={send_msg}>
                        Send
                    </button>
                </div>
            </div>

            <div className={`absolute flex flex-col right-10 top-10 bg-[#282828] w-1/4 h-4/6 rounded-lg border border-white/30 ${!imgBox ? 'hidden' : ''}`}>
                <div className='w-full flex items-center gap-3 box-border p-3 border-b border-white/30 bg-[#353535] rounded-t-lg text-white/80 text-sm font-semibold'>

                    <FaImage color='#808080' size={18} />
                    Image to Code

                </div>

                <div className='flex-1 overflow-y-auto overflow-x-hidden'>
                    <div className='flex justify-start'>
                        <div className='bg-[#BCE613] w-4/5 ml-2 mt-2 box-border p-2 rounded-lg text-wrap break-words text-[#333333]/80 text-md'>
                            <h1 className='font-bold uppercase text-xs text-[#333333]'>
                                Bot
                            </h1>

                            <p id='image-output'>...</p>
                        </div>
                    </div>
                </div>

                <div className='p-3 border-t border-white/30 bg-[#353535] rounded-b-lg text-sm font-semibold flex justify-center'>
                    <input type='file' accept='.png, .jpg, .jpeg' placeholder='Ask me anything' className='w-11/12 bg-[#282828] border border-white/30 rounded-l-md p-2 text-white/80 text-sm font-semibold outline-none' onChange={e => { setSelectedImage(e.target.files[0]) }} />
                    <button className='w-1/5 bg-[#BCE613] py-1.5 rounded-r-md' onClick={img_2_code_func}>
                        Send
                    </button>
                </div>
            </div>

            <div className={`absolute flex flex-col justify-center items-center gap-5 left-[22%] top-[25%] bg-[#353535] w-3/5 h-1/5 rounded-lg border border-white/30 ${!generateBox ? 'hidden' : ''}`}>
                <input type='type' placeholder='Ask me anything' className='w-11/12 bg-[#282828] border border-white/30 rounded-md p-2 text-white/80 text-sm font-semibold outline-none' value={ask} onChange={e => { setAsk(e.target.value) }} />

                <button className='w-3/5 bg-[#BCE613] py-1.5 rounded-md font-semibold duration-100 hover:opacity-70' onClick={text_2_code_func}>
                    Generate Code
                </button>


            </div>

            
            {isSpotLightModalOpen && (
                <SpotLightModal />
            )}
        </main>
    )
}

export default Workspace