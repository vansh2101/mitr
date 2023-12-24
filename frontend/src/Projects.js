import './Projects.css';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegPlusSquare } from "react-icons/fa";
import logo from "./assets/logo.png";
import reactIcon from "./assets2/reactIcon.png";
import nodeIcon from "./assets2/nodeIcon.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { logout, get_workspaces, create_workspace } from "./scripts/dbFunc";
import WorkspaceModal from "./components/modals/WorkspaceModal";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Projects() {
    const user = localStorage.getItem('user')
    if (!user) window.location.href = '/'

    const [isModalOpen, setModalOpen] = useState(false);
    const [workspaces, setWorkspaces] = useState([]);
    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceType, setWorkspaceType] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef(null);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleCreateWorkspace = () => {
        let newDate = new Date();
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        const ws = [...workspaces, { 'name': workspaceName, 'type': workspaceType, 'date': `${day} / ${month} / ${year}` }];
        create_workspace(localStorage.getItem('user'), workspaceName, ws);
        get_data()
        closeModal();
    };

    const get_data = () => {
        get_workspaces(user).then(res => {
            setWorkspaces(res.data()['workspaces'])
        })
    }

    useEffect(() => {
        get_data()
    }, [])






    const handleArrowClick = (direction) => {
        const step = 1; // Number of workspaces to move on each click
        let newIndex;

        if (direction === 'forward') {
            // Move forward, hide the first workspace
            newIndex = currentIndex + step;
        } else {
            // Move backward, hide the last workspace
            newIndex = currentIndex - step;
        }

        // Ensure newIndex is within the valid range
        newIndex = Math.max(0, Math.min(workspaces.length - 4, newIndex));

        setCurrentIndex(newIndex);
    };




    return(
        <div className="projects-main h-screen w-screen">
            {/* Header */}
            <div className="projects-header h-[6.234vh] bg-[#171717] flex items-center relative">
                <span className='text-[#B7B7B7] absolute text-[28px] left-[1.322vw]'>mitr</span>
                <AiOutlineInfoCircle size={26} className='text-[#B7B7B7] right-[1.322vw] absolute cursor-pointer' />
            </div>


            {/* Name */}
            <div className='projects-name h-[8.841vh] w-full top-[14.736vh] absolute'>
                <div className='projects-logo flex items-center justify-center h-full'>
                    <img src={logo} alt='logo' />
                    <span className='text-[#B7B7B7] text-[50px] ml-3'>mitr</span>
                </div>

            </div>


            {/* Workspaces */}
            <div className='projects-workspaces mt-[31.286vh] h-[25.165vh] flex justify-center'>

                <div onClick={() => handleArrowClick('backward')} className='arrow-key w-[3.5125vw] hover:bg-[#171717] hover:opacity-50 h-full flex items-center justify-center'>
                    <IoIosArrowBack className='text-[#B7B7B7] hover:scale-125 cursor-pointer' size={30} />
                </div>

                <div className="workspace-container" ref={containerRef}>
                {workspaces.slice(currentIndex, currentIndex + 4).map((item, key) =>
                <Link to="/workspace" key={key}>
                        <div className='projects-ws w-[13.425vw] h-full mx-[1.322vw] bg-[#0f0e4780] rounded-[20px] hover:border-t-4 hover:border-[#8C9AA6]'>
                    <div className='flex justify-center pt-[5.534vh]'>
                        <img className='h-[6.534vh]' src={(item.type == 'react' || item.type == 'React') ?  reactIcon : nodeIcon} alt='JSIcon'/>
                    </div>
                    <div className='mt-4'>
                        <p className='projects-head flex justify-center text-white opacity-70 text-[24px] font-[550]'>{item.name}</p>
                        <p className='projects-time flex justify-center text-white opacity-70 text-[16px] font-[400]'>{item.date}</p>
                    </div>
                </div>
                </Link>
                )}
                </div>
                {/* <div className='projects-ws w-[13.425vw] h-full mx-[1.322vw] bg-[#2B2B2B] hover:border-t-4 hover:border-[#8C9AA6]'>
                    <div className='flex justify-center mt-[5.534vh]'>
                        <img className='h-[6.534vh]' src={JSIcon} alt='JSIcon'/>
                    </div>
                    <div className='mt-4'>
                        <p className='projects-head flex justify-center text-[#b5b5b5] text-[24px] font-[550]'>Food Website</p>
                        <p className='projects-time flex justify-center text-[#b5b5b5bf] text-[16px] font-[400]'>23-11-2023</p>
                    </div>
                </div>
                <div className='projects-ws w-[13.425vw] h-full mx-[1.322vw] bg-[#2B2B2B] hover:border-t-4 hover:border-[#8C9AA6]'>
                    <div className='flex justify-center mt-[5.534vh]'>
                        <img className='h-[6.534vh]' src={JSIcon} alt='JSIcon'/>
                    </div>
                    <div className='mt-4'>
                        <p className='projects-head flex justify-center text-[#b5b5b5] text-[24px] font-[550]'>Food Website</p>
                        <p className='projects-time flex justify-center text-[#b5b5b5bf] text-[16px] font-[400]'>23-11-2023</p>
                    </div>
                </div>
                <div className='projects-ws w-[13.425vw] h-full mx-[1.322vw] bg-[#2B2B2B] hover:border-t-4 hover:border-[#8C9AA6]'>
                    <div className='flex justify-center mt-[5.534vh]'>
                        <img className='h-[6.534vh]' src={JSIcon} alt='JSIcon'/>
                    </div>
                    <div className='mt-4'>
                        <p className='projects-head flex justify-center text-[#b5b5b5] text-[24px] font-[550]'>Food Website</p>
                        <p className='projects-time flex justify-center text-[#b5b5b5bf] text-[16px] font-[400]'>23-11-2023</p>
                    </div>
                </div> */}
                

                <div onClick={openModal} className='projects-ws-plus w-[13.425vw] h-full rounded-[20px] mx-[1.322vw] bg-[#ffffff] pt-[75px] hover:border-[#8C9AA6] hover:border-2 opacity-20 hover:opacity-40 cursor-pointer'>
                    <div>
                        <FaRegPlusSquare className=' text-black  m-auto' size={40} />
                        <div className=' w-full flex items-center justify-center mt-4'>
                            <div>
                                {/* <p className='text-white opacity-80 font-bold text-[20px]'>Create new</p> */}
                                <p className='text-black  font-bold text-[20px]'>Workspace</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div onClick={() => handleArrowClick('forward')} className='arrow-key w-[3.5125vw] hover:bg-[#171717] hover:opacity-50 h-full flex items-center justify-center'>
                    <IoIosArrowForward className='text-[#B7B7B7] hover:scale-125 cursor-pointer' size={30} />
                </div>
            </div>


            {isModalOpen && (
                <WorkspaceModal
                    closeModal={closeModal}
                    handleCreateWorkspaceClick={handleCreateWorkspace}
                    name={workspaceName}
                    type={workspaceType}
                    setWorkspaceName={setWorkspaceName}
                    setWorkspaceType={setWorkspaceType}
                />
            )}
        </div>





        
    );
}


export default Projects;