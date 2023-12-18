import React, { useState } from "react";
import './main.css';

import logo from '../src/assets/logo.png';
import plus from '../src/assets/plus.svg';
import reactIcon from '../src/assets/reactIcon.png';
import nodeIcon from '../src/assets/nodeIcon.png';
import forwardArrow from '../src/assets/forwardArrow.svg';
import WorkspaceModal from "./components/modals/WorkspaceModal";


function Dashboard() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleCreateWorkspace = () => {
        // Implement Workspace Creation logic here!
        console.log("Creating workspace...");

        closeModal();
    };

    return (
        <div className="whole h-screen w-screen flex">
            {/* Left Panel */}
            <div className="leftP w-[54.365vw]">
                <img className="logo w-[3.9682vw] h-[5.193vh] ml-[2.976vw] mt-[4.073vh]" src={logo} alt="logo" />

                <div className="leftP-header mt-[9.603vh] flex">
                    <div className="workspace w-[23.941vw] h-[6.720vh] ml-[6.944vw] mb-[0.916vh]">WORKSPACES :</div>
                    <div className="flex items-center justify-center ml-[15.542vw]">
                        <div className="plus w-[3.571vw] h-[5.498vh] flex items-center justify-center bg-slate-50">
                            <img src={plus} alt="plus"/>
                        </div>
                    </div>
                </div>

                <div className="leftP-content w-[39.484vw] ml-[6.944vw] mt-[8.248vh]">
                    <div className="project-name h-[10.285vh] mt-[2.240vh] flex items-center">
                        <img className="w-[3.306vw] h-[4.844vh] ml-[2.513vw]" src={reactIcon} alt="reactIcon"></img>
                        <div className="content ml-[1.587vw] h-[7.128vh]">
                            <div className="content-head w-[14.351vw] h-[4.175vh] text-center flex items-center justify-center">Food Website</div>
                            <div className="content-time w-[8.201vw] h-[2.953vh] ml-[0.793vw] flex items-center justify-center">23-11-2023</div>
                        </div>
                        <img className="ml-[13.095vw]" src={forwardArrow} alt="forwardArrow"/>
                    </div>
                    <div className="project-name h-[10.285vh] mt-[2.240vh] flex items-center">
                        <img className="w-[3.306vw] h-[4.844vh] ml-[2.513vw]" src={nodeIcon} alt="nodeIcon"></img>
                        <div className="content ml-[1.587vw] h-[7.128vh]">
                            <div className="content-head w-[14.351vw] h-[4.175vh] text-center flex items-center justify-center">Food Website</div>
                            <div className="content-time w-[8.201vw] h-[2.953vh] ml-[0.793vw] flex items-center justify-center">23-11-2023</div>
                        </div>
                        <img className="ml-[13.095vw]" src={forwardArrow} alt="forwardArrow"/>
                    </div>
                    <div className="project-name h-[10.285vh] mt-[2.240vh] flex items-center">
                        <img className="w-[3.306vw] h-[4.844vh] ml-[2.513vw]" src={reactIcon} alt="reactIcon"></img>
                        <div className="content ml-[1.587vw] h-[7.128vh]">
                            <div className="content-head w-[14.351vw] h-[4.175vh] text-center flex items-center justify-center">Food Website</div>
                            <div className="content-time w-[8.201vw] h-[2.953vh] ml-[0.793vw] flex items-center justify-center">23-11-2023</div>
                        </div>
                        <img className="ml-[13.095vw]" src={forwardArrow} alt="forwardArrow"/>
                    </div>
                    <div className="project-name h-[10.285vh] mt-[2.240vh] flex items-center">
                        <img className="w-[3.306vw] h-[4.844vh] ml-[2.513vw]" src={reactIcon} alt="reactIcon"></img>
                        <div className="content ml-[1.587vw] h-[7.128vh]">
                            <div className="content-head w-[14.351vw] h-[4.175vh] text-center flex items-center justify-center">Food Website</div>
                            <div className="content-time w-[8.201vw] h-[2.953vh] ml-[0.793vw] flex items-center justify-center">23-11-2023</div>
                        </div>
                        <img className="ml-[13.095vw]" src={forwardArrow} alt="forwardArrow"/>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="rightP w-[45.634vw] flex">
                <div className="label ml-[5.092vw] mt-[31.975vh]">
                    <p className="create-code-faster ml-[3.505vw]">
                        <span className="heading">
                            Create&nbsp;&nbsp; &lt;&nbsp;/&nbsp;&gt;&nbsp;&nbsp; Code
                            <br />
                            &nbsp;&nbsp;&nbsp;Faster with{" "}
                        </span>
                        <span className="mitr">mitr</span>
                    </p>

                    <p className="help h-[7.942vh] w-[35.383vw] text-center mt-1">
                        Need help? Create MERN focused projects with your mitr to get complete code assistance to build faster
                    </p>

                    <button onClick={openModal} className="btn h-[5.90vh] w-[19.179vw] mt-[3.156vh] ml-[8.068vw]">
                        + Create new workspace
                    </button>
                </div>
                {isModalOpen && (
                    <WorkspaceModal
                        closeModal={closeModal}
                        handleCreateWorkspace={handleCreateWorkspace}
                    />
                )}
            </div>
        </div>
    );
}

export default Dashboard;