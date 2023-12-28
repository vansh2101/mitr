import './Landing.css';
import logo from './assets2/logo.png';
import gitIcon from './assets2/gitIcon.svg';
import rightP from './assets2/rightP.png';
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { github_login, logout } from "./scripts/dbFunc";
import img1 from "./assets2/img1.png";
import img2 from "./assets2/img2.png";
import img3 from "./assets2/img3.png";
import img4 from "./assets2/img4.png";
import img5 from "./assets2/img5.png";


function Landing() {
    if (localStorage.getItem('user')) window.location.href = '/projects'


    const login = () => {
        github_login()
    }




    return (
        <div className='main-screen h-screen w-screen relative'>




            {/* HEADER */}
            <div className='header h-[14.545vh] ml-[9.240vw] mr-[9.240vw] pl-[1.994vw] pr-[1.994vw] pt-[7.272vh] pb-[7.272vh] flex items-center justify-between'>
                <div className=' flex items-center justify-center'>
                    <img src={logo} alt="Design+Code logo" className='w-9 aspect-1' />
                </div>
                <div className='header-navigator ml-[15.511vw]'>

                    <div className='more'>
                        <button className='navigator-btn h-[5.454vh] w-[4.290vw] flex items-center justify-center'>
                            <MdOutlineMoreHoriz className='text-white font-bold w-[4vw] h-[5vh]' />
                            {/* <p className='navigator-para'></p> */}
                        </button>
                    </div>
                    <div className='search'>
                        <button className='navigator-btn h-[5.454vh] w-[4.290vw] flex items-center justify-center'>
                            <IoSearchSharp className='text-white font-bold w-[4vw] h-[5vh]' />
                            {/* <p className='navigator-para'></p> */}
                        </button>
                    </div>


                    <a href='/'>
                        <button className='navigator-btn h-[5.454vh] w-[4.290vw] flex items-center justify-center'>
                            <MdOutlineAccountCircle className='text-white font-bold w-[4vw] h-[5vh]' />
                            {/* <p className='navigator-para'></p> */}
                        </button>
                    </a>

                </div>

            </div>



            {/* HERO SECTION */}
            <div className='flex'>


                {/* HERO SECTION LEFT  */}
                <div className='heroSectionLeft left-[11.221vw] top-[24.242vh] absolute w-[33.003vw] h-[61.212vh]'>

                    <h1 class="design-code">
                        Design
                        <br />
                        and code
                        <br />
                        <span>
                            <span class="TextAnimation">
                                <span>M</span>
                                <span>E</span>
                                <span>R</span>
                                <span>N</span>
                            </span>
                        </span>
                        &nbsp; apps
                    </h1>

                    <p className='para-1 w-[19.801vw] mt-[3.636vh]'>Discover a new era of MERN development with Mitr. Unleash the potential of adaptive coding and seamless workflows.</p>
                    <button onClick={login} className='btn-X mt-[3.636vh] cursor-pointer rounded-2xl px-6 box-border py-2'>
                        <div className='btn-content flex items-center'>
                            <div className='btn-ring w-[3.630vw] h-[6.66vh] flex items-center'>
                                <img src={gitIcon} alt="gitIcon" />
                            </div>
                            <div className='btn-text ml-[0.99vw]'>
                                <p className='btn-text-1 text-white opacity-85'>Sign in with Github</p>
                            </div>
                        </div>
                    </button>
                </div>




                {/* HERO SECTION RIGHT */}
                <div className='heroSectionRight w-full h-[61.212vh] relative'>
                    {/* <div className='img-1'>
                        <div className='inner-img-1'>
                            <img src={img1} className='w-[11.881vw] left-[37.953vw] rounded-[8px] absolute' alt="Mockup"></img>
                        </div>
                    </div>
                    <div className='img-2'>
                        <div className='inner-img-2'>
                            <img src={img2} className='w-[11.881vw] left-[53.795vw] rounded-[8px] absolute' alt="Mockup"></img>
                        </div>
                    </div> */}
                    <div className='img-3'>
                        <div className='inner-img-3'>
                            <img src={img3} className='w-[46.204vw] top-[9.696vh] left-[42.244vw] rounded-[8px] absolute' alt="Mockup"></img>
                        </div>
                    </div>
                    <div className='img-4'>
                        <div className='inner-img-4'>
                            <img src={img4} className='w-[26.402vw] left-[36.963vw] top-[37.575vh] rounded-[8px] absolute' alt="Mockup"></img>
                        </div>
                    </div>
                    <div className='img-5'>
                        <div className='inner-img-5'>
                            <img src={img5} className='w-[27.062vw] left-[66.668vw] top-[37.575vh] rounded-[8px] absolute' alt="Mockup"></img>
                        </div>
                    </div>
                </div>

            </div>






        </div>




    );
}

export default Landing;
