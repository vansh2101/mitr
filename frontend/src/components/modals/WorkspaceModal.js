import React, { useState } from "react";

import '../../main.css'

function WorkspaceModal({ closeModal, handleCreateWorkspace }) {
    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceType, setWorkspaceType] = useState('');

    const handleCreateWorkspaceClick = () => {
        handleCreateWorkspace();
    };

    return (
        <div className="modal w-[19.179vw] h-[21.975vh] mt-[3.156vh] flex justify-center">
            <div className="modal-content p-[20px]">
                <label htmlFor="workspaceName">Workspace Name:</label>
                <input
                    className="outline-none pl-2"
                    type="text"
                    id="workspaceName"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                />
                <label htmlFor="workspaceName">Workspace Type:</label>
                <input
                    className="outline-none pl-2"
                    type="text"
                    id="workspaceType"
                    value={workspaceType}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                />

                <button onClick={handleCreateWorkspaceClick} className="font-bold cursor-pointer mt-1">Create Workspace</button>
                <button onClick={closeModal} className="text-red-800 font-semibold hover:underline">Cancel</button>
            </div>
        </div>
    );
}

export default WorkspaceModal;