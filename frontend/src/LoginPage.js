import React from "react";
import './main.css';
import { Link } from 'react-router-dom';
import { github_login, logout } from "./scripts/dbFunc";


import logo from '../src/assets/logo.png';
import loginBg from '../src/assets/loginBg.png';
import gitIcon from '../src/assets/gitIcon.svg';

function LoginPage() {
    if (localStorage.getItem('user')) window.location.href = '/dashboard'

    const login = () => {
        github_login()
    }

    return (
        <div>
            <div className="auth h-screen w-screen flex">
                {/* Left Auth */}
                <div className="leftA w-[54.365vw]">
                    <div className="flex">
                        <img className="logo w-[3.5682vw] h-[5.893vh] ml-[2.976vw] mt-[4.073vh]" src={logo} alt="logo" />
                    </div>
                    <img className="w-[50.264vw] h-[53.038vh] mt-[13.849vh] ml-0" src={loginBg} alt="loginBg" />

                    
                </div>

                {/* Right Auth */}
                <div className="rightA w-[45.634vw] flex">
                    <div className="label ml-[5.703vw] mt-[32.281vh]">
                        <p className="speed-up  w-[37.896vw]">
                            <span className="headingRA">
                                Speed Up your Development
                                <br />
                                <span className=" ml-[9.391vw]">speed with{" "}</span>
                            </span>
                            <span className="mitr2">mitr</span>
                        </p>

                        {/* <Link to="/dashboard"> */}
                        <button className="btnGit bg-black h-[8.655vh] w-[23.8088vw] mt-[5.906vh] ml-[6.51vw] flex items-center justify-center" onClick={login}>
                            <img src={gitIcon} alt="gitIcon" />
                            <span className="git-signin ml-[1.658vw] text-white text-center">Sign in with GitHub</span>
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;