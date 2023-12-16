import React, { useRef, useState } from "react";
// import Editor from '@monaco-editor/react';
import bot from '../src/assets/bot.svg';
import logo from '../src/assets/logo.png';
import folder from '../src/assets/folder.svg';
import debug from '../src/assets/debug.svg';
import run from '../src/assets/run.svg';
import search from '../src/assets/search.svg';
import vector from '../src/assets/vector.svg';
import LanguageIcon from '../src/assets/LanguageIcon.png';
import IDE from '../src/assets/Editor.png';
import './main.css'


// const files = {
//   "script.js": {
//     name: "script.js",
//     language: 'javascript',
//     value: "let name = 5"
//   },
//   "index.html": {
//     name: "index.html",
//     language: 'html',
//     value: "<p>Paragraph</p>"
//   },
// }

function App() {

    return (
        <div className="main h-screen w-screen">


            {/* Navigation Menu */}
            <nav className="navigation-menu flex flex-row pt-[3.156vh]">

                <img className="logo w-[3.9682vw] h-[5.193vh] ml-[2.843vw]" src={logo} alt="logo" />
                <div className="project w-[15.54vw] ml-[1.190vw] flex items-center justify-center">
                    <img src={vector} alt="vector" />
                    <p className="pl-[1.190vw]">Sample Project</p>
                </div>
                <div className="folder-1 w-[3.042vw] ml-[2.513vw] p-[0.727vw] flex items-center justify-center">
                    <img className="w-[1.653vw]" src={folder} alt="folder" />
                </div>
                <div className="folder-2 w-[3.042vw] ml-[1.190vw] p-[0.727vw] flex items-center justify-center">
                    <img className="w-[1.653vw]" src={folder} alt="folder" />
                </div>
                <div className="bot w-[3.042vw] ml-[1.190vw] p-[0.727vw] flex items-center justify-center">
                    <img className="w-[1.653vw]" src={bot} alt="bot" />
                </div>
                <div className="debug w-[3.042vw] ml-[0.925vw] p-[0.727vw] flex items-center justify-center">
                    <img className="w-[1.653vw]" src={debug} alt="debug" />
                </div>
                <div className="search ml-[1.190vw] w-[44.576vw] flex items-center">
                    <img className="pl-[1.256vw] cursor-pointer" src={search} alt="search" />
                    <input className="search-field text-white w-[39.880vw] h-[2.443vh] ml-[0.859vw]" placeholder="Type commands here..." />
                </div>
                <div className="run ml-[1.388vw] w-[8.399vw] pl-[1.719vw] pr-[0.992vw] flex items-center justify-center">
                    <img src={run} alt="run" />
                    <p className="pl-[1.190vw]">Run</p>
                </div>

            </nav>

            <div className="panelContainer w-full mt-[2.138vh] ml-[2.843vw] flex h-[84.215vh]">
                {/* Left panel */}
                <div className="leftPanel w-[17.129vw] h-[84.215vh]">
                    <div className="left-header h-[5.091vh]"></div>
                </div>

                {/* Right panel */}
                <div className="rightPanel w-[76.058vw] h-[84.215vh] ml-[1.058vw]">
                    <div className="right-header h-[5.091vh] flex items-center">
                        <img className="ml-[1.058vw]" src={LanguageIcon} alt="LanguageIcon"></img>
                        <p className="ml-[0.529vw]">App.js</p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
