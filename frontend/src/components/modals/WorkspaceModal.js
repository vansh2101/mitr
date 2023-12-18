import React from "react";

import '../../main.css'

function WorkspaceModal({ closeModal, handleCreateWorkspaceClick, name, type, setWorkspaceName, setWorkspaceType }) {

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