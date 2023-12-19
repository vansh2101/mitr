import React from "react";
import '../main.css';

import { PiImageFill } from "react-icons/pi";

function ImagePanel({ onClose }) {
    // Implement behaviour of Image panel here 

    return (
        <div className="image-panel top-0 right-0 fixed  mt-[11.099vh] ml-[2.843vw] h-[84.215vh]">
            {/* Panel Content */}
            {/* <button onClick={onClose}>Close Panel</button> */}
            <div className="imagePanel w-[37.5vw] h-[84.215vh] mr-[2.91vw]">
                <div className="image-header h-[5.091vh] bg-[#8BC3EB] opacity-60"></div>
                <div className="flex items-center justify-center mt-[24vh]">

                <div className="image-send w-[18vw] inline-block rounded-xl bg-[#8BC3EB] pl-[3vh] opacity-60">
                    {/* <input className="image-input  text-white w-[32.95vw] ml-[0.75vw] mt-3 h-[5.091vh] p-3 outline-none bg-[#8BC3EB] opacity-60" type="text" placeholder="Write your prompt here..." /> */}
                    <PiImageFill className=" text-[#1E1E1E]" size={220} />
                    <input
                        type="file"
                        accept="image/*"
                        className="image-input ml-[0.75vw] outline-none pb-[3vh] text-black"
                    />
                </div>
                </div>
            </div>
        </div>
    );
}

export default ImagePanel;