import './Landing.css';
import logo from './assets2/logo.png';
import gitIcon from './assets2/gitIcon.svg';
import rightP from './assets2/rightP.png';
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { github_login, logout } from "./scripts/dbFunc";


function Landing() {
    if (localStorage.getItem('user')) window.location.href = '/dashboard'


    const login = () => {
        github_login()
    }




    return (
        <div className='main-screen h-screen w-screen relative'>
            {/* <img src={bg} alt='bg' className='h-screen w-screen'/> */}




            {/* HEADER */}
            <div className='header h-[14.545vh] ml-[9.240vw] mr-[9.240vw] pl-[1.994vw] pr-[1.994vw] pt-[7.272vh] pb-[7.272vh] flex items-center'>
                <div className=' flex items-center justify-center'>
                    <img src={logo} alt="Design+Code logo" className='w-9 aspect-1' />
                </div>
                <div className='header-navigator ml-[15.511vw]'>
                    <a href='/'>
                        <button className='navigator-btn h-[5.454vh] w-[8.580vw]'>
                            <p className='navigator-para'>Courses</p>
                        </button>
                    </a>
                    <a href='/'>
                        <button className='navigator-btn h-[5.454vh] w-[8.910vw]'>
                            <p className='navigator-para'>Tutorials</p>
                        </button>
                    </a>
                    <a href='/'>
                        <button className='navigator-btn h-[5.454vh] w-[10.561vw]'>
                            <p className='navigator-para'>Livestreams</p>
                        </button>
                    </a>
                    <a href='/'>
                        <button className='navigator-btn h-[5.454vh] w-[8.085vw]'>
                            <p className='navigator-para'>Pricing</p>
                        </button>
                    </a>

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

                    <p className='para-1 w-[19.801vw] mt-[3.636vh]'>Don&apos;t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</p>
                    <button onClick={login} className='btn-X mt-[3.636vh] cursor-pointer rounded-2xl px-6 box-border py-2'>
                        <div className='btn-content flex items-center'>
                            <div className='btn-ring w-[3.630vw] h-[6.66vh] flex items-center'>
                                {/* <img src={logo} alt="logo"/> */}
                                <img src={gitIcon} alt="gitIcon" />
                            </div>
                            <div className='btn-text ml-[0.99vw]'>
                                {/* <p className='btn-text-1 text-white opacity-75 hover:opacity-85'>Get Pro Access</p>
              <p className='btn-text-2'>$19 per month</p> */}
                                <p className='btn-text-1 text-white opacity-85'>Sign in with Github</p>
                            </div>
                        </div>
                    </button>
                    <p className='base-font w-[18.481vw] mt-[3.636vh] opacity-40 text-black'>Purchase includes access to 50+ courses, 320+ premium tutorials, 300+ hours of videos, source files and certificates.</p>
                </div>




                {/* HERO SECTION RIGHT */}
                <div className='heroSectionLeft h-[1.955vh] w-[56.765vw] ml-[37.953vw] mt-[8.636vh]'>
                    <img src={rightP} alt='rightP' />
                </div>

            </div>






        </div>




    );
}

export default Landing;
