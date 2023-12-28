import React from "react";
import "./SpotLightModal.css";
import { IoSearchOutline } from "react-icons/io5";

function SpotLightModal() {

    return (
        <div className="SpotLightModal-ws fixed inset-0 z-10 flex items-center justify-center w-[39.793vw] h-[6.698vh] mt-[46.651vh] ml-[30.103vw]">
            <div className="SpotLightModal-ws-content w-[39.793vw] h-[6.698vh] rounded-[15px] bg-[#262626]">

                <div className="SpotLightModal-ws-actual-content h-full w-full flex items-center">
                    <IoSearchOutline className="text-white/60 ml-[15px]" size={30}/>
                    <input
                        type='text'
                        placeholder='Spotlight Search'
                        className='bg-transparent h-full w-full ml-[8px] border-none outline-none text-[28px] text-white placeholder:text-[#808080] placeholder:text-[28px]'
                    />
                </div>

            </div>
        </div>
    );
}

export default SpotLightModal;