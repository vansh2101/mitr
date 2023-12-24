import React from "react";

// import '../../main.css'

function WorkspaceModal({ closeModal, handleCreateWorkspaceClick, name, type, setWorkspaceName, setWorkspaceType }) {

    return (
        <div className="modal rounded-[10px] border-[#8C9AA6] border-[1px] w-[15.079vw] h-[21.975vh] flex justify-center absolute top-[70vh] left-[42.5vw] bg-[#171717]">
            <div className="modal-content p-[20px]">
                <label className="text-[#B7B7B7]" htmlFor="workspaceName">Workspace Name:</label>
                <input
                    className="outline-none pl-2 rounded-[7px]"
                    type="text"
                    id="workspaceName"
                    value={name}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                />
                <label className="text-[#B7B7B7]" htmlFor="workspaceName">Workspace Type:</label>
                <input
                    className="outline-none pl-2 rounded-[7px]"
                    type="text"
                    id="workspaceType"
                    value={type}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                />
                <div className="flex items-center justify-center">
                    <button onClick={handleCreateWorkspaceClick} className="font-bold cursor-pointer mt-3 hover:underline text-blue-500">Create Workspace</button>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={closeModal} className="text-red-800 font-semibold hover:underline">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default WorkspaceModal;