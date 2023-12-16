import React, { useRef, useState } from "react";
// import Editor from '@monaco-editor/react';
import Bot from '../src/assets/Bot.svg';
import Logo from '../src/assets/new_logo-removebg-preview 1.png';
import Folder from '../src/assets/Folder.svg';
import Debug from '../src/assets/Debug.svg';
import Run from '../src/assets/Run.svg';
import Search from '../src/assets/Search.svg';
import Vector from '../src/assets/Vector.svg';
import LanguageIcon from '../src/assets/LanguageIcon.png';
import IDE from '../src/assets/Editor.png';


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
    <div className="project-page">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
        </div>
        <div className="overlap-group">
          <img className="vector" alt="Run" src={Run} />
          <div className="text-wrapper">Run</div>
        </div>
        <div className="overlap-group-2">
          <img className="img" alt="Search" src={Search} />
          <div className="text-wrapper-2">Type commands here.....</div>
        </div>
        <div className="overlap-2">
          <img className="vector-2" alt="Vector" src={Vector} />
          <div className="text-wrapper-3">Sample Project</div>
        </div>
        <div className="overlap-3">
          <img className="image" alt="Image" src={IDE} />
          <div className="overlap-4">
            <div className="text-wrapper-4">App.js</div>
            <img className="file-img" alt="File img" src={LanguageIcon} />
          </div>
        </div>
        <div className="overlap-5">
          <img className="folder" alt="Folder" src={Folder} />
          <div className="rectangle-2" />
        </div>
        <div className="overlap-6">
          <img className="folder" alt="Folder" src={Folder} />
          <div className="rectangle-2" />
        </div>
        <div className="vector-wrapper">
          <img className="vector-3" alt="Debug" src={Debug} />
        </div>
        <div className="bot-wrapper">
          <img className="bot" alt="Bot" src={Bot} />
        </div>
        <img className="new-logo-removebg" alt="Logo" src={Logo} />
      </div>
    </div>
  );
}

export default App;
