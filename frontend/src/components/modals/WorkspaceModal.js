import React from "react";
import "./WorkspaceModal.css";
import { RxCross2 } from "react-icons/rx";

function WorkspaceModal({ closeModal, handleCreateWorkspaceClick, name, type, setWorkspaceName, setWorkspaceType }) {

    return (
        <div className="modal-ws fixed inset-0 z-10 flex items-center justify-center">
            <div className="modal-ws-content w-[58.366vw] h-[64.545vh] rounded-[20px]">
                <div className="modal-ws-close absolute -top-[18px] -right-[18px]">
                    <div onClick={closeModal} className="modal-ws-close-btn w-[36px] h-[36px] rounded-[30px] cursor-pointer flex justify-center items-center">
                        <RxCross2 className="text-white" size={24} />
                    </div>

                </div>

                <div className="modal-ws-actual-content h-full w-full flex items-center">
                    <div className="modal-ws-left w-[23.762vw] h-[59.696vh] ml-[1.32vw] rounded-[20px]"></div>
                    <div className="modal-ws-right w-[21.122vw] h-[52.121vh] ml-[6.580vw] pt-9">
                        <h1 className=" text-[40px] font-bold text-white py-1">New Workspace</h1>
                        <form className="modal-ws-form  mt-[9.090vh]">
                            <div className="ws-form-email h-[5.454vh]">
                                <label>
                                    <div></div>
                                    <input value={name} onChange={e=>setWorkspaceName(e.target.value)} type="text" placeholder="Workspace Name" autocomplete="on" required="" className="ws-form-email-input w-full h-full"></input>
                                </label>
                            </div>

                            <div className="ws-form-email h-[5.454vh] mt-[2.424vh]">
                                <label>
                                    <div></div>
                                    <input value={type} onChange={e => setWorkspaceType(e.target.value)} type="text" placeholder="Workspace Type" autocomplete="on" required="" className="ws-form-email-input w-full h-full"></input>
                                </label>
                            </div>

                            <button onClick={handleCreateWorkspaceClick} type="submit" className="ws-form-submit-btn cursor-pointer w-full h-[5.454vh] mt-[5.636vh] flex justify-center items-center">
                                <p className="text-white font-bold text-[18px]">Create</p>
                            </button>
                        </form>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default WorkspaceModal;