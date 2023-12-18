import React, { useState } from "react";
import { create_workspace } from "../../scripts/dbFunc";

import '../../main.css'

function WorkspaceModal({ closeModal, handleCreateWorkspaceClick, name, type, setWorkspaceName, setWorkspaceType }) {
    // const [workspaceName, setWorkspaceName] = useState('');
    // const [workspaceType, setWorkspaceType] = useState('');

    // const handleCreateWorkspaceClick = () => {
    //     let newDate = new Date();
    //     let day = newDate.getDate();
    //     let month = newDate.getMonth() + 1;
    //     let year = newDate.getFullYear();
    //     const workspaces = [...all_ws, {'name': workspaceName, 'type': workspaceType, 'date': `${day} / ${month} / ${year}`}];
    //     create_workspace(localStorage.getItem('user'), workspaceName, workspaces);
    //     closeModal();
    // };

    return (
        <div className="modal w-[19.179vw] h-[21.975vh] flex justify-center absolute top-50 left-50">
            <div className="modal-content p-[20px]">
                <label htmlFor="workspaceName">Workspace Name:</label>
                <input
                    className="outline-none pl-2"
                    type="text"
                    id="workspaceName"
                    value={name}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                />
                <label htmlFor="workspaceName">Workspace Type:</label>
                <input
                    className="outline-none pl-2"
                    type="text"
                    id="workspaceType"
                    value={type}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                />

                <button onClick={handleCreateWorkspaceClick} className="font-bold cursor-pointer mt-1">Create Workspace</button>
                <button onClick={closeModal} className="text-red-800 font-semibold hover:underline">Cancel</button>
            </div>
        </div>
    );
}

export default WorkspaceModal;