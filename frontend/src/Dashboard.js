import React from "react";
import "./main.css";
import { Link } from 'react-router-dom';

import logo from "../src/assets/logo.png";
import plus from "../src/assets/plus.svg";
import reactIcon from "../src/assets/reactIcon.png";
import nodeIcon from "../src/assets/nodeIcon.png";
import forwardArrow from "../src/assets/forwardArrow.svg";

function Dashboard() {
  return (
    <div className="whole h-screen w-screen bg-slate-500 flex">
      {/* Left Panel */}
      <div className="leftP w-[54.365vw] pl-[6.94%]">
        <img
          className="logo w-[3vw] absolute top-7 left-7"
          src={logo}
          alt="logo"
        />

        <div className="leftP-header w-[80%] mt-[15vh] flex justify-between items-center">
          <div className="workspace">
            WORKSPACES:
          </div>
          <div className="flex items-center justify-center ml-[15.542vw]">
            <div className="plus w-[3vw] h-[3vw] flex items-center justify-center bg-slate-50">
              <img src={plus} alt="plus" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="leftP-content w-[39.484vw] mt-[8.248vh]">
        {[0,1,2,3].map(key => 
          <Link to="/project" key={key}>
                <div className="project-name h-[10.285vh] mt-[2.240vh] flex items-center cursor-pointer">
                    <img
                    className="w-[3vw] ml-[2.513vw]"
                    src={reactIcon}
                    alt="reactIcon"
                    ></img>
                    <div className="content ml-[1.587vw] h-[7.128vh]">
                        <div className="content-head w-[14.351vw] h-[4.175vh] text-center text-xs flex items-center justify-center">
                            Food Website
                        </div>
                        <div className="content-time w-[8.201vw] h-[2.953vh] flex items-center justify-center">
                            23-11-2023
                        </div>
                    </div>
                    <img
                    className="ml-[13.095vw]"
                    src={forwardArrow}
                    alt="forwardArrow"
                    />
                </div>
          </Link>
             )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="rightP w-[45.634vw] flex">
        <div className="label ml-[5.092vw] mt-[31.975vh]">
          <p className="create-code-faster ml-[3.505vw]">
            <span className="heading">
              Create {`</>`} Code
              <br />
             Faster with{" "}
            </span>
            <span className="mitr">mitr</span>
          </p>

          <p className="help h-[7.942vh] w-[35.383vw] text-center mt-1">
            Need help? Create MERN focused projects with your mitr to get
            complete code assistance to build faster
          </p>

          <button className="btn h-[5.90vh] w-[19.179vw] mt-[3.156vh] ml-[8.068vw]">
            + Create new workspace
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
