import React, { useEffect, useState } from 'react'
import { AiFillFlag, AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FaHeart, FaMoon } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import logo from "../assets/logo.png";
import dots1 from "../assets/dots1.png"
import navProfile from "../assets/nav-profile.jpg";
import oneFifty from "../assets/150.jpg";
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BsInfo } from 'react-icons/bs';
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar({ stateData }) {
    const { setIsSidebarOpen, isSidebarOpen, isDark, setIsDark } = stateData || {}
    const [isNotificationBoxOpen, setIsnotificationBoxOpen] = useState(false)
    const [profileSettingBoxOpen, setProfileSettingBoxOpen] = useState(false)
    const [sidebarProfieButtonOpen, setSidebarProfileButton] = useState(false)
    const [isOpenJob, setIsOpenJob] = useState(false)
    const [isAppsOpen, setIsAppsOpen] = useState(false)
    const [isEmailOpen, setIsEmailOpen] = useState(false)
    const [isShopOpen, setIsShopOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSmallDeviceSidebarOpen, setIsSmallDeviceSidebarOpen] = useState(false)
    const screenWidth = window.screen.width;

    useEffect(() => {
        const handleNotificationBoxClose = (event) => {
            const notificationBox = document.getElementById('notification_box');
            const notificationButton = document.getElementById('notification_button')?.contains(event.target);
            if (!notificationButton && notificationBox && !notificationBox.contains(event.target)) {
                setIsnotificationBoxOpen(false);
            }
        };
        document.addEventListener('click', handleNotificationBoxClose);
        return () => {
            document.removeEventListener('click', handleNotificationBoxClose);
        };
    }, []);

    useEffect(() => {
        const handleProfileSettingBox = (event) => {
            const profileSettingBox = document.getElementById('profile_setting_box');
            const profileSetting = document.getElementById('profile_button')?.contains(event.target);
            if (!profileSetting && profileSettingBox && !profileSettingBox.contains(event.target)) {
                setProfileSettingBoxOpen(false);
            }
        };
        document.addEventListener('click', handleProfileSettingBox);
        return () => {
            document.removeEventListener('click', handleProfileSettingBox);
        };
    }, []);

    useEffect(() => {
        const handleProfileSettingBox = (event) => {
            const profileSettingBox = document.getElementById('sidebar_profile_box');
            const profileSetting = document.getElementById('sidebar_profile_button')?.contains(event.target);
            if (!profileSetting && profileSettingBox && !profileSettingBox.contains(event.target)) {
                setSidebarProfileButton(false);
            }
        };
        document.addEventListener('click', handleProfileSettingBox);
        return () => {
            document.removeEventListener('click', handleProfileSettingBox);
        };
    }, []);


    const handleJobsOpen = () => {
        setIsAppsOpen(false)
        setIsOpenJob(!isOpenJob)
    }
    const handleAppsOpen = () => {
        setIsOpenJob(false)
        setIsAppsOpen(!isAppsOpen)
    }
    const handleEmailOpen = () => {
        setIsShopOpen(false)
        setIsEmailOpen(true)
    }
    const handleShopOpen = () => {
        setIsEmailOpen(false)
        setIsShopOpen(true)
    }

    return (
        <>
            <div div className="flex px-6 md:px-12 py-5 sticky z-[50px] bg-white top-0" >
                <div className="flex flex-1 md:justify-between">
                    <div>
                        <div className='flex gap-4 items-center'>
                            <img className="w-[30px] md:w-[48px] h-[30px] md:h-[48px] md:hidden" src={logo} alt="" />

                            {/* menu button for medium device */}
                            {screenWidth > 650 && <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="flex flex-col  justify-center group ">
                                <p className={`${isSidebarOpen ? "w-[26px]" : "w-[13px] relative left-[14px] top-1 rotate-45 bg-primary"}  h-[3px] bg-black rounded-full transition-all duration-500 `}></p>
                                <p className={`w-[26px] h-[3px] ${isSidebarOpen ? "bg-black" : "bg-primary"}  rounded-full mt-[6px]`}></p>
                                <>
                                    {!isSidebarOpen && <p className={`w-[13px]  relative left-[14px] -top-1 -rotate-45 transition-all duration-500 h-[3px] bg-primary rounded-full mt-[6px]`}></p>}
                                    {isSidebarOpen && <p className={`w-[13px] group-hover:w-[26px] transition-all duration-500 h-[3px] bg-black rounded-full mt-[6px]`}></p>}
                                </>
                            </button>}

                            {/* menu button for small device */}
                            {screenWidth < 650 && <button onClick={() => setIsSmallDeviceSidebarOpen(!isSmallDeviceSidebarOpen)} className="flex flex-col  justify-center group ">
                                <p className={`${isSmallDeviceSidebarOpen ? "w-[26px]" : "w-[13px] relative left-[14px] top-1 rotate-45 bg-primary"}  h-[3px] bg-black rounded-full transition-all duration-500 `}></p>
                                <p className={`w-[26px] h-[3px] ${isSmallDeviceSidebarOpen ? "bg-black" : "bg-primary"}  rounded-full mt-[6px]`}></p>
                                <>
                                    {!isSmallDeviceSidebarOpen && <p className={`w-[13px]  relative left-[14px] -top-1 -rotate-45 transition-all duration-500 h-[3px] bg-primary rounded-full mt-[6px]`}></p>}
                                    {isSmallDeviceSidebarOpen && <p className={`w-[13px] group-hover:w-[26px] transition-all duration-500 h-[3px] bg-black rounded-full mt-[6px]`}></p>}
                                </>
                            </button>}

                            <h1 className=" text-3xl font-bold ml-10 hidden md:block ">Invoice</h1>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="md:flex items-center justify-between max-w-[580px] hidden ">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-[#F5F5F5] outline-none py-3 px-3 rounded-s-xl w-[230px] text-light-gray"
                                />
                                <button className="bg-[#F5F5F5] py-3 px-3 rounded-e-xl text-light-gray flex items-center">
                                    <AiOutlineSearch size={26} />
                                </button>
                            </div>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="ml-4 bg-secondary text-white w-12 rounded-lg md:flex hidden justify-center items-center  ">
                            <FiPlus size={24} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex gap-4 md:gap-10 justify-end">
                    {/* dark light mood  */}
                    <button onClick={() => setIsDark(!isDark)} className="text-dark-gray text-[18px] md:text-[22px]">
                        <FaMoon />
                    </button>

                    {/* notification  */}
                    <div className="text-dark-gray relative flex">
                        <button id="notification_button" onClick={() => setIsnotificationBoxOpen(!isNotificationBoxOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={`${screenWidth < 650 ? "18" : "24"}`}
                                height={`${screenWidth < 650 ? "18" : "24"}`}
                                viewBox="0 0 24 24"
                            >
                                <g data-name="Layer 2" transform="translate(-2 -2)">
                                    <path
                                        id="Path_20"
                                        data-name="Path 20"
                                        d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z"
                                    />
                                </g>
                            </svg>
                        </button>
                        <p className="bg-primary text-white rounded-full w-5 md:w-7 h-5 md:h-7 absolute -top-1 md:-top-1 -right-[14px] md:-right-[23px]  flex justify-center items-center">
                            4
                        </p>

                        {/* notification box  */}
                        {isNotificationBoxOpen && <div style={{ boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.1)' }} id="notification_box" className="absolute w-[300px] h-[380px] -left-[205px] md:-left-[260px] bg-white top-[60px] md:top-[72px] rounded-lg flex flex-col">
                            <div className="h-[87%] overflow-y-scroll notifications_box">

                                <div onClick={() => setIsnotificationBoxOpen(false)} className="flex gap-2 cursor-pointer items-center border-b pb-3 border-[#F5F5F5] pt-3 px-3">
                                    <div>
                                        <img
                                            className="w-[50px] h-[50px] rounded-lg"
                                            src={oneFifty}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h6 className="font-medium">Dr sultads Send you Photo</h6>
                                        <p className="text-sm text-start text-gray">
                                            29 July 2020 - 02:26 pm
                                        </p>
                                    </div>
                                </div>

                                <div onClick={() => setIsnotificationBoxOpen(false)} className="flex gap-2 cursor-pointer items-center border-b pb-3 border-[#F5F5F5] pt-3 px-3">
                                    <h5 className="w-[50px] h-[50px] font-bold text-lg bg-[#EFBAE6] flex justify-center items-center text-[#D653C1] rounded-lg">
                                        KG
                                    </h5>
                                    <div>
                                        <h6 className="font-medium">Resport created successfully</h6>
                                        <p className="text-sm text-start text-gray">
                                            29 July 2020 - 02:26 pm
                                        </p>
                                    </div>
                                </div>

                                <div onClick={() => setIsnotificationBoxOpen(false)} className="flex gap-2 cursor-pointer items-center border-b pb-3 border-[#F5F5F5] pt-3 px-3">
                                    <div className="w-[50px] h-[50px] font-bold text-lg bg-[#E7FBE6] flex justify-center items-center text-[#68E365] rounded-lg">
                                        <MdHome size={26} />
                                    </div>
                                    <div>
                                        <p className="font-medium">Reminder : Treatment Time!</p>
                                        <p className="text-sm text-start text-gray">
                                            29 July 2020 - 02:26 pm
                                        </p>
                                    </div>
                                </div>

                                <div onClick={() => setIsnotificationBoxOpen(false)} className="flex gap-2 cursor-pointer items-center border-b pb-3 border-[#F5F5F5] pt-3 px-3">
                                    <h5 className="w-[50px] h-[50px] font-bold text-lg bg-[#FEE6EA] flex justify-center items-center text-[#F72B50] rounded-lg">
                                        KG
                                    </h5>
                                    <div>
                                        <h6 className="font-medium">Resport created successfully</h6>
                                        <p className="text-sm text-start text-gray">
                                            29 July 2020 - 02:26 pm
                                        </p>
                                    </div>
                                </div>

                                <div onClick={() => setIsnotificationBoxOpen(false)} className="flex gap-2 cursor-pointer items-center border-b pb-3 border-[#F5F5F5] pt-3 px-3">
                                    <div className="w-[50px] h-[50px] font-bold text-lg bg-[#FEEBE6] flex justify-center items-center text-primary rounded-lg">
                                        <MdHome size={26} />
                                    </div>
                                    <div>
                                        <p className="font-medium">Reminder : Treatment Time!</p>
                                        <p className="text-sm text-start text-gray">
                                            29 July 2020 - 02:26 pm
                                        </p>
                                    </div>
                                </div>

                                <div onClick={() => setIsnotificationBoxOpen(false)} className="flex gap-2 cursor-pointer items-center border-b pb-3 border-[#F5F5F5] pt-3 px-3">
                                    <div>
                                        <img
                                            className="w-[50px] h-[50px] rounded-lg"
                                            src={oneFifty}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium">Dr sultads Send you Photo</p>
                                        <p className="text-sm text-start text-gray">
                                            29 July 2020 - 02:26 pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[13%] border-t border-[#bbb5b5a8] flex justify-center items-center">
                                <button onClick={() => setIsnotificationBoxOpen(false)} className="text-center text-primary">
                                    See all notifications
                                </button>
                            </div>
                        </div>}
                    </div>

                    {/* profile  */}
                    <button onClick={() => setProfileSettingBoxOpen(!profileSettingBoxOpen)} id="profile_button" className="relative">
                        <img
                            className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-lg"
                            src={navProfile}
                            alt=""
                        />

                        {/* profile settings  */}
                        {profileSettingBoxOpen && <div style={{ boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.1)' }} id="profile_setting_box" className="absolute bg-white w-[200px] -right-10 md:right-0 flex flex-col py-3 top-[60px] md:top-[72px] rounded-lg">
                            <button className="text-start hover:bg-[#f5f5f5] py-[9px] flex items-center px-6 gap-3 font-medium text-light-gray hover:text-primary">
                                <svg id="icon-user2" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <p>Profile</p>
                            </button>
                            <button className="text-start hover:bg-[#f5f5f5] py-[9px] flex items-center px-6 gap-3 font-medium text-light-gray hover:text-primary">
                                <svg id="icon-inbox1" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <p>Inbox</p>
                            </button>
                            <button className="text-start hover:bg-[#f5f5f5] py-[9px] flex items-center px-6 gap-3 font-medium text-light-gray hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                <p>Logout</p>
                            </button>
                        </div>}
                    </button>
                </div>
            </div >


            {/* mobile sidebar  */}
            {screenWidth < 650 && isSmallDeviceSidebarOpen && <div style={{ boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.1)' }} className={`py-[0.5rem] fixed left-0 w-[280px] bg-white z-[40px] top-20 bottom-0 shadow-2xl pb-6 ${isSmallDeviceSidebarOpen ? "left-0" : "-left-72 "} transition-all duration-700 `}>
                <div onClick={() => setSidebarProfileButton(!sidebarProfieButtonOpen)} id="sidebar_profile_button" className=" flex items-center justify-between px-[1rem] cursor-pointer">
                    <div className="flex gap-4 ">
                        <img className="w-[55px] h-[55px] rounded-lg" src={oneFifty} alt="" />
                        <div>
                            <h6 className="text-[18px] text-dark-gray font-medium">Franklink Jr</h6>
                            <p className="text-sm text-gray">Superadmin</p>
                        </div>
                    </div>
                    <IoIosArrowDown size={26} />
                </div>

                {/* profile settings  */}
                {sidebarProfieButtonOpen && <div id="sidebar_profile_box" style={{ boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.2)' }} className="absolute bg-white  z-50 w-[270px] left-0 flex flex-col py-3 top-[75px] rounded-lg">
                    <button className="text-start hover:bg-[#f5f5f5] py-[9px] flex items-center px-6 gap-3 font-medium text-light-gray hover:text-primary">
                        <svg id="icon-user2" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <p>Profile</p>
                    </button>
                    <button className="text-start hover:bg-[#f5f5f5] py-[9px] flex items-center px-6 gap-3 font-medium text-light-gray hover:text-primary">
                        <svg id="icon-inbox1" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <p>Inbox</p>
                    </button>
                    <button className="text-start hover:bg-[#f5f5f5] py-[9px] flex items-center px-6 gap-3 font-medium text-light-gray hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        <p>Logout</p>
                    </button>
                </div>}

                <div className={`mt-6 pr-3 `}>
                    {/* jobs button  */}
                    <ul id="myButton">
                        <li onClick={handleJobsOpen} className={`flex pl-8 justify-between items-center ${isOpenJob && "bg-[#FEEBE6] "}  cursor-pointer  relative border-primary duration-500 transition-all py-4 w-full group`}>

                            <div div className={` flex  gap-4`}>
                                <AiFillFlag size={26} className={`text-gray group-hover:text-primary transition duration-100 ${isOpenJob && "text-primary"} `} />
                                <p className={`text-[18px] font-medium ${isOpenJob ? "text-primary" : "text-gray"}  group-hover:text-primary`}>Jobs</p>
                                <div>
                                    <p className="bg-danger px-2 py-[1px] text-sm rounded-md text-white">New</p>
                                </div>
                            </div>
                            <div className={` ${isOpenJob && " rotate-90"} transition duration-500 mr-4`}>
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: isOpenJob ? '#F93A0B' : '#888888' }} />
                                </svg>
                            </div>
                            <span className={`absolute right-0 ${isOpenJob ? "bg-primary w-2 rounded-md" : "w-0"} h-full transition-all duration-500 `}></span>
                        </li>

                        {/* job toggle  */}
                        <Link to={"/dashboard/jobs/new-job"} className={`flex items-center pl-[38px] gap-7  group w-full cursor-pointer ${isOpenJob ? "py-3 " : "py-3 hidden"} transition-all duration-500`}>
                            <p className="w-[6px] group-hover:w-[18px] transition-all duration-700 h-[2px] bg-[#f39580]"></p>
                            <p className="group-hover:text-primary transition duration-400 text-gray font-medium">New Job</p>
                        </Link>
                    </ul>

                    {/* apps button  */}
                    <ul>
                        <li onClick={handleAppsOpen} className={`flex pl-8 items-center ${isAppsOpen && "bg-[#FEEBE6] "} cursor-pointer relative border-primary duration-500 transition-all py-4  group w-full`}>
                            <div className="flex justify-between w-full ">
                                <div className='flex gap-6'>
                                    <BsInfo className={` ${isAppsOpen ? "bg-primary" : "bg-[#aaaaaa]"} duration-500 rounded-full text-white mt-1 cursor-pointer w-5 h-5  transition-all  `} />
                                    <p className={`text-[18px] font-medium ${isAppsOpen ? "text-primary" : "text-gray"} `}>Apps</p>
                                </div>
                                <div className={` ${isAppsOpen && " rotate-90"} transition duration-500 mr-4`}>
                                    <svg
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: isAppsOpen ? '#F93A0B' : '#888888' }} />
                                    </svg>
                                </div>
                            </div>
                            <span className={`absolute right-0 ${isAppsOpen ? "bg-primary w-2 rounded-md" : "w-0"} h-full  transition-all duration-500 `}></span>
                        </li>

                        {/* email button  */}
                        {isAppsOpen && <ul>
                            <li onClick={handleEmailOpen} className={`flex items-center pl-[38px] py-2 group w-full justify-between cursor-pointer `}>
                                <div className="flex items-center gap-7">
                                    <p className="w-[6px] group-hover:w-[18px] transition-all duration-700 h-[2px] bg-[#f39580]"></p>
                                    <p className="group-hover:text-primary transition duration-400 text-gray font-medium">Email</p>
                                    <div>
                                        <p className="bg-danger px-2 py-[1px] text-sm rounded-md text-white">New</p>
                                    </div>
                                </div>
                                <div className={` ${isEmailOpen && " rotate-90"} transition duration-500 mr-4`}>
                                    <svg
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: '#888888' }} />
                                    </svg>
                                </div>
                            </li>
                            {/* email toogle  */}
                            {isEmailOpen && <ul>
                                <li onClick={handleEmailOpen}>
                                    <Link className={`flex items-center pl-[38px] py-2 group w-full justify-between cursor-pointer `} to={"/dashboard/apps/email/read"}>
                                        <div className="flex items-center gap-7">
                                            <p className="w-[6px] group-hover:w-[18px] transition-all duration-700 h-[2px] bg-[#f39580]"></p>
                                            <p className="group-hover:text-primary transition duration-400 text-gray font-medium">Read</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>}

                            {/* shop button  */}
                            <li onClick={handleShopOpen} className={`flex items-center pl-[38px] py-2 justify-between group w-full  `}>
                                <div className="flex gap-7 items-center">
                                    <p className="w-[6px] group-hover:w-[18px] transition-all duration-700 h-[2px] bg-[#f39580]"></p>
                                    <p className="group-hover:text-primary transition duration-400 text-gray font-medium">Shop</p>
                                </div>
                                <div className={` ${isShopOpen && " rotate-90"} transition duration-500 mr-4`}>
                                    <svg
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: '#888888' }} />
                                    </svg>
                                </div>
                            </li>

                            {/* shop toogle  */}
                            {isShopOpen && <ul>
                                <li onClick={handleShopOpen}>
                                    <Link className={`flex items-center pl-[38px] py-2 group w-full justify-between cursor-pointer `} to={"/dashboard/apps/shop/invoice"}>
                                        <div className="flex items-center gap-7">
                                            <p className="w-[6px] group-hover:w-[18px] transition-all duration-700 h-[2px] bg-[#f39580]"></p>
                                            <p className="group-hover:text-primary transition duration-400 text-gray font-medium">Invoice</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>}
                        </ul>}
                    </ul>
                </div>

                <div>
                    <div className=" mx-[1.5rem] bg-[#145650] p-8 rounded-2xl text-white mt-8 relative">
                        <p className="font-medium mb-3">Let Jobick Managed Your Resume Easily</p>
                        <p className="text-gray ">Lorem ipsum dolor sit amet</p>
                        <img className="absolute top-6 left-4" src={dots1} alt="" />
                    </div>

                    <div className="mt-10 mx-[1rem] px-4">
                        <p className="font-bold">Jobick Job Admin</p>
                        <p className="text-gray text-sm mt-1">© 2023 All Rights Reserved</p>
                        <p className="flex items-center text-sm mt-4 text-gray">Made with <span className=" inline-block px-[6px]"><FaHeart size={20} /></span>  by DexignLab</p>
                    </div>
                </div>
            </div >}

            {/* modal  */}
            {isModalOpen && <div data-aos="fade-down" onClick={() => setIsModalOpen(false)} className='bg-[#bdb9b956] absolute top-0 right-0 bottom-0 left-0 z-[100px]'>
                <div onClick={(e) => e.stopPropagation()} className='bg-white  rounded-lg shadow z-[99px] top-16 right-1/2 translate-x-1/2 absolute w-[800px]'>
                    <div className='  border-b border-[#F5F5F5] py-4'>
                        <div className='flex justify-between items-center px-6'>
                            <h6 className='text-lg font-medium text-dark-gray'>Job Title</h6>
                            <IoCloseOutline size={20} className='text-gray hover:text-dark-gray transition duration-100' onClick={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                    <div className='border-b border-[#F5F5F5]'>
                        <p className='py-8 px-6 text-gray '>hello</p>
                    </div>
                    <div className='flex gap-4 justify-end px-6 py-4'>
                        <button onClick={() => setIsModalOpen(false)} className='py-3 px-6 bg-[#faccd5] text-danger rounded-lg text-[18px]'>Close</button>
                        <button className='py-3 px-6 bg-primary text-white text-[18px] rounded-lg'>Save Changes</button>
                    </div>
                </div>
            </div>}
        </>
    )
}
