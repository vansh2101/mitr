import React from "react";
import '../main.css';
import { FaArrowUp } from "react-icons/fa";

function BotPanel({ onClose }) {
    // Implement behaviour of panel here 

    return (
        <div className="bot-panel top-0 right-0 fixed  mt-[11.099vh] ml-[2.843vw] h-[84.215vh]">
            {/* Panel Content */}
            {/* <button onClick={onClose}>Close Panel</button> */}
            <div className="botPanel w-[37.5vw] h-[84.215vh] mr-[2.91vw]">
                <div className="bot-header h-[5.091vh]"></div>

                {/* Chat */}
                <div className="bot-chat h-[71vh] "></div>

                <div className="bot-send flex items-center">
                    <input className="bot-input  text-white w-[32.95vw] ml-[0.75vw] mt-3 h-[5.091vh] p-3 outline-none" type="text" placeholder="Write your prompt here..." />
                    <div onClick={() => console.log('botSend clicked!')} className="bot-send-icon cursor-pointer bg-[#686C99] rounded-lg w-[2.5vw] h-[5.091vh] flex items-center mt-3 justify-center ml-2">
                        <FaArrowUp className="input-icon absolute  text-[#4A4C68]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotPanel;