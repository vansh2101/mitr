import React, {useState} from 'react'
import Btn from './components/Btn'
import logo from '../src/assets/logo.png';
import Editor from '@monaco-editor/react'

//? Icons
import { IoBugOutline } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaChevronRight, FaFile, FaFolder, FaPlus, FaSearch } from "react-icons/fa";



function Workspace() {

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

    const toggleFilesVisibility = (index) => {
        const updatedFolders = [...folderData];
        updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
        setFolderData(updatedFolders);

        document.getElementById(index).classList.toggle('rotate-90');
        document.getElementById(`file${index}`).classList.toggle('hidden');
    };

  return (
    <main className='flex flex-col bg-[#111111] w-full h-[100vh]'>

        <div className='flex px-4 py-2 gap-3 border-b border-[#ffffff]/20'>
            <div className='border-r border-[#ffffff]/20 pr-5 mr-2'>
                <img src={logo} className='aspect-square w-9'/>
            </div>

            <Btn text='Debug' icon={<IoBugOutline color='#111111' size={16} />}/>
            <Btn text='Optimize' icon={<IoBugOutline color='#111111' size={16} />}/>
            <Btn text='Translate' icon={<IoBugOutline color='#111111' size={16} />}/>
            <Btn text='Documentation' icon={<IoBugOutline color='#111111' size={16} />}/>
            <Btn text='Generate Code' icon={<IoBugOutline color='#111111' size={16} />}/>
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
                                <FaFolder size={14} color='#808080' />
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
                                    <FaFile size={14} color='#808080' />
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
    </main>
  )
}

export default Workspace