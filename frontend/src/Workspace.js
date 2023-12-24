import React, {useState} from 'react'
import Btn from './components/Btn'
import logo from '../src/assets/logo.png';
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'

//? Icons
import { IoBugOutline } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBug, FaChevronRight, FaCode, FaFile, FaFolder, FaImage, FaPlus, FaSearch } from "react-icons/fa";
import { GoDependabot, GoDotFill } from "react-icons/go"


function Workspace() {

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
    }

  return (
    <main className='flex flex-col bg-[#111111] w-full h-[100vh]'>

        <div className='flex px-4 py-2 gap-3 border-b border-[#ffffff]/20'>
            <Link to='/dashboard'>
                <div className='border-r border-[#ffffff]/20 pr-5 mr-2'>
                    <img src={logo} className='aspect-square w-9'/>
                </div>
            </Link>

            <Btn text='Assistant' icon={<GoDependabot color='#111111' size={16} />} onClick={()=> setAssistantBox(!assistantBox)}/>
            <Btn text='Generate Code' icon={<FaCode color='#111111' size={16} className='opacity-75' />}/>
            <Btn text='Debug' icon={<IoBugOutline color='#111111' size={16} />} onClick={()=> setDebugBox(!debugBox)}/>
            <Btn text='Image to Code ' icon={<FaImage color='#111111' size={16} className='opacity-75' />}/>
        </div>

        <div className='flex flex-1'>
            <div className='w-[18%] h-full border-r border-[#ffffff]/20 box-border p-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3 bg-[#242424] px-5 pr-8 py-1.5 text-[#808080] text-sm font-semibold rounded-md cursor-pointer border border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'>
                        <FaPlus size={14} />
                        Create New File
                    </div>

                    <div className='flex items-center gap-3 bg-[#242424] px-3 py-1.5 text-[#808080] rounded-md cursor-pointer border border-white/10 duration-150 hover:bg-white/30 hover:border-white/50 hover:text-white'>
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
                <div className=''>
                    <div className='flex items-center gap-1.5 h-full w-[15%] box-border p-2 pl-7 bg-[#1e1e1e] text-[#808080] text-sm'>
                        <RiJavascriptFill fill='#FEFF3D' size={17} />
                        index.js
                    </div>
                </div>

                <div id='editor' className='flex-1 w-full py-1 bg-[#1e1e1e]'>
                    <Editor height={'100%'} width={'100%'} theme='vs-dark' defaultLanguage='javascript' defaultPath='index.js' defaultValue='//Welcome to Javascript' />
                </div>
            </div>
        </div>

        <div className={`absolute flex flex-col right-10 top-10 bg-[#282828] w-1/4 h-4/6 rounded-lg border border-white/30 ${!debugBox ? 'hidden' : ''}`}>
            <div className='w-full flex items-center justify-between box-border px-3 pr-5 py-2 border-b border-white/30 bg-[#353535] rounded-t-lg text-white/80 text-sm font-semibold'>
                <div>
                    <img src='loader.gif' className='w-8 inline-block mr-3' />
                    Errors are being Searched...
                </div>

                <FaBug color='#808080' size={16} />
            </div>

            <div className='flex-1 overflow-y-auto'>
            {[1,2,3].map((item, index) => 
                <>
                <div className='flex items-center justify-between p-4 border-b border-white/30 cursor-pointer' onClick={() => {toggleErrorVisibility(index)}}>
                    <div className='flex items-center gap-2 text-white/80 font-semibold text-sm'>
                        <GoDotFill color='#F46841' size={14} />
                        Error Line {item}
                    </div>
                    <FaChevronRight size={14} color='#808080' id={`error${index}`} className='duration-200' />
                </div>

                <div className='px-4 py-3 box-border hidden' id={`error-para-${index}`}>
                    <p className='text-white/60 text-[13px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis interdum libero, vitae pharetra nibh. Nulla vel tincidunt lorem. Integer pulvinar massa at libero elementum interdum. Maecenas placerat sit amet erat et dapibus. Aenean aliquam vitae tellus nec cursus. Phasellus in sagittis erat.
                    </p>
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

        <div className={`absolute flex flex-col right-10 top-10 bg-[#282828] w-1/4 h-4/6 rounded-lg border border-white/30 ${!assistantBox ? 'hidden' : ''}`}>
            <div className='w-full flex items-center gap-3 box-border p-3 border-b border-white/30 bg-[#353535] rounded-t-lg text-white/80 text-sm font-semibold'>

                <GoDependabot color='#808080' size={18} />
                Assistant

            </div>

           <div className='flex-1 overflow-y-auto overflow-x-hidden'>
                <div className='flex justify-start'>
                    <div className='bg-[#BCE613] w-4/5 ml-2 mt-2 box-border p-2 rounded-lg text-wrap break-words text-[#333333]/80 text-md'>
                        <h1 className='font-bold uppercase text-xs text-[#333333]'>
                            Bot
                        </h1>

                        scjdnsdjnvsipdvnspdivnspvisdvnspdivnsvpsudnvspduvn
                    </div>
                </div>

                <div className='flex justify-end'>
                    <div className='bg-[#353535] w-4/5 mr-2 mt-2 box-border p-2 rounded-lg text-wrap break-words text-white/60 text-md'>
                        <h1 className='font-bold uppercase text-xs text-white/80'>
                            User
                        </h1>

                        scjdnsdjnvsipdvnspdivnspvisdvnspdivnsvpsudnvspduvn
                    </div>
                </div>
           </div>

            <div className='p-3 border-t border-white/30 bg-[#353535] rounded-b-lg text-sm font-semibold flex justify-center'>
                <input type='text' placeholder='Ask me anything' className='w-11/12 bg-[#282828] border border-white/30 rounded-l-md p-2 text-white/80 text-sm font-semibold outline-none' />
                <button className='w-1/5 bg-[#BCE613] py-1.5 rounded-r-md'>
                    Send
                </button>
            </div>
        </div>
    </main>
  )
}

export default Workspace