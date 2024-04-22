import React, { useEffect, useState } from 'react'
import dots1 from "../assets/dots1.png"
import logo from "../assets/logo.png";
import oneFifty from "../assets/150.jpg";
import { BsInfo } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { AiFillFlag } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function Sidebar({ stateData }) {
    const { isSidebarOpen } = stateData || {}
    const [isOpenJob, setIsOpenJob] = useState(false)
    const [isAppsOpen, setIsAppsOpen] = useState(false)
    const [isEmailOpen, setIsEmailOpen] = useState(false)
    const [isShopOpen, setIsShopOpen] = useState(false)
    const [profileSettingBoxOpen, setProfileSettingBoxOpen] = useState(false)
    console.log(profileSettingBoxOpen)

    const navigate = useNavigate()

    useEffect(() => {
        const handleProfileSettingBox = (event) => {
            const profileSettingBox = document.getElementById('profile_setting');
            const profileSetting = document.getElementById('profile').contains(event.target);
            if (!profileSetting && profileSettingBox && !profileSettingBox.contains(event.target)) {
                setProfileSettingBoxOpen(false);
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
        <div className='sticky top-0'>
            <div className="flex px-[1.8rem] items-center py-[19px]">
                <img className="w-[48px] h-[48px]" src={logo} alt="" />
                {isSidebarOpen && <div className="ml-3">
                    <h1 className="text-3xl font-bold text-dark-gray">Jobick</h1>
                    <p className="text-xs text-gray">Job Admin Dashboard</p>
                </div>}

            </div>

            <div className="py-[0.5rem] relative ">
                <div onClick={() => setProfileSettingBoxOpen(!profileSettingBoxOpen)} id="profile" className=" flex items-center justify-between px-[1rem] cursor-pointer">
                    <div className="flex gap-4 ">
                        <img className="w-[55px] h-[55px] rounded-lg" src={oneFifty} alt="" />
                        {isSidebarOpen && <div>
                            <h6 className="text-[18px] text-dark-gray font-medium">Franklink Jr</h6>
                            <p className="text-sm text-gray">Superadmin</p>
                        </div>}
                    </div>
                    {isSidebarOpen && <IoIosArrowDown size={26} />}
                </div>


                {/* profile settings  */}
                {profileSettingBoxOpen && <div id="profile_setting" style={{ boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.2)' }} className="absolute bg-white  z-50 w-[270px] left-0 flex flex-col py-3 top-[75px] rounded-lg">
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

                <div className={`mt-6 ${isSidebarOpen ? "pr-3" : " px-3"} `}>
                    {/* jobs button  */}
                    <ul id="myButton">
                        {/* render sidebar jobs button when isSidebarOpen is false  */}
                        {!isSidebarOpen && <Tippy content={
                            <>
                                {!isSidebarOpen && <div className='flex flex-col gap-2 py-3 pl-2 pr-8 w-32 text-[16px] text-gray'>
                                    <Link className='hover:text-primary' to={"/dashboard/jobs/new-job"}>New Job</Link>
                                </div>}
                            </>
                        } interactive placement="right" theme='light' >

                            <li onClick={handleJobsOpen} className={`flex ${isSidebarOpen ? "pl-8 justify-between" : "mx-auto justify-center w-full rounded-lg hover:bg-[#FEEBE6] mb-1"}  items-center ${isOpenJob && "bg-[#FEEBE6] "}  cursor-pointer  relative border-primary duration-500 transition-all py-4 w-full group`}>
                                <div div className={` flex  ${isSidebarOpen ? "gap-6" : "flex-col gap-2 justify-center items-center"} `}>
                                    <AiFillFlag size={26} className={`text-gray ${!isSidebarOpen && "group-hover:text-primary transition duration-100"} ${isOpenJob && "text-primary"} `} />
                                    {isSidebarOpen && <p className={`text-[18px] font-medium ${isOpenJob ? "text-primary" : "text-gray"}  group-hover:text-primary`}>Jobs</p>}
                                    <div>
                                        <p className="bg-danger px-2 py-[1px] text-sm rounded-md text-white">New</p>
                                    </div>
                                </div>
                                {isSidebarOpen && <div className={` ${isOpenJob && " rotate-90"} transition duration-500 mr-4`}>
                                    <svg
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: isOpenJob ? '#F93A0B' : '#888888' }} />
                                    </svg>
                                </div>}
                                <span className={`absolute right-0 ${isOpenJob ? isSidebarOpen && "bg-primary w-2 rounded-md" : "w-0"} h-full transition-all duration-500 `}></span>
                            </li>
                        </Tippy>}

                        {/* render sidebar jobs button when isSidebarOpen is true  */}
                        <>
                            {isSidebarOpen && <li onClick={handleJobsOpen} className={`flex ${isSidebarOpen ? "pl-8 justify-between" : "mx-auto justify-center w-full rounded-lg hover:bg-[#FEEBE6] mb-1"}  items-center ${isOpenJob && "bg-[#FEEBE6] "}  cursor-pointer  relative border-primary duration-500 transition-all py-4 w-full group`}>

                                <div div className={` flex  ${isSidebarOpen ? "gap-6" : "flex-col gap-2 justify-center items-center"} `}>
                                    <AiFillFlag size={26} className={`text-gray ${!isSidebarOpen && "group-hover:text-primary transition duration-100"} ${isOpenJob && "text-primary"} `} />
                                    {isSidebarOpen && <p className={`text-[18px] font-medium ${isOpenJob ? "text-primary" : "text-gray"}  group-hover:text-primary`}>Jobs</p>}
                                    <div>
                                        <p className="bg-danger px-2 py-[1px] text-sm rounded-md text-white">New</p>
                                    </div>
                                </div>

                                {isSidebarOpen && <div className={` ${isOpenJob && " rotate-90"} transition duration-500 mr-4`}>
                                    <svg
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: isOpenJob ? '#F93A0B' : '#888888' }} />
                                    </svg>
                                </div>}
                                <span className={`absolute right-0 ${isOpenJob ? isSidebarOpen && "bg-primary w-2 rounded-md" : "w-0"} h-full transition-all duration-500 `}></span>
                            </li>}

                            {/* job toggle  */}
                            {isSidebarOpen && <Link to={"/dashboard/jobs/new-job"} className={`flex items-center pl-[38px] gap-7  group w-full cursor-pointer ${isOpenJob ? "py-3 " : "py-3 hidden"} transition-all duration-500`}>
                                <p className="w-[6px] group-hover:w-[18px] transition-all duration-700 h-[2px] bg-[#f39580]"></p>
                                <p className="group-hover:text-primary transition duration-400 text-gray font-medium">New Job</p>
                            </Link>}
                        </>
                    </ul>

                    {/* apps button  */}
                    <ul>
                        { /* render sidebar apps button when isSidebarOpen is fasle  */}
                        {!isSidebarOpen && <Tippy content={
                            <>
                                <div className={`flex flex-col  py-2 pl-2 w-44 text-[16px] text-gray ${isSidebarOpen && "hidden"} `}>
                                    <Tippy content={
                                        <button onClick={() => navigate("/dashboard/apps/email/read")} className='w-36 py-2 text-start text-[16px] pl-2 hover:text-primary transition duration-75 text-gray'>
                                            Read
                                        </button>
                                    } interactive placement="right" theme='light'>
                                        <div onClick={() => {
                                            setIsEmailOpen(!isEmailOpen)
                                            setIsShopOpen(false)
                                        }} className='flex items-center justify-between cursor-pointer hover:text-primary duration-75 '>
                                            <p>Email</p>
                                            <p className='bg-danger text-white px-3 rounded-lg py-1 text-xs text-center '>New</p>
                                            <div className={` ${isEmailOpen && " rotate-90"} transition duration-500 mr-4 flex justify-end`}>
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
                                        </div>
                                    </Tippy>

                                    <Tippy content={
                                        <button onClick={() => navigate("/dashboard/apps/shop/invoice")} className='w-36 py-2 text-start text-[16px] pl-2 hover:text-primary transition duration-75 text-gray'>
                                            Invoice
                                        </button>
                                    } interactive placement="right" theme='light'>
                                        <div onClick={() => {
                                            setIsShopOpen(!isShopOpen)
                                            setIsEmailOpen(false)
                                        }} className='flex justify-between items-center w-full cursor-pointer hover:text-primary duration-75'>
                                            <p>Shop</p>
                                            <div className={` ${isShopOpen && " rotate-90"} transition duration-500 mr-4 flex justify-end`}>
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
                                        </div>
                                    </Tippy>
                                </div>
                            </>
                        } interactive placement="right" theme='light' >

                            <li onClick={handleAppsOpen} className={`flex pl-8 items-center ${isAppsOpen && "bg-[#FEEBE6] "} cursor-pointer relative border-primary duration-500 transition-all ${isSidebarOpen ? "py-4" : "py-6 rounded-lg hover:bg-[#FEEBE6] "} group w-full`}>
                                <div className="flex justify-between w-full ">
                                    <div className='flex gap-6'>
                                        <BsInfo className={` ${isAppsOpen ? "bg-primary" : "bg-[#aaaaaa]"} ${isSidebarOpen ? "duration-500" : "group-hover:bg-primary duration-100"} rounded-full text-white mt-1 cursor-pointer w-5 h-5  transition-all  `} />
                                        {isSidebarOpen && <p className={`text-[18px] font-medium ${isAppsOpen ? "text-primary" : "text-gray"} `}>Apps</p>}
                                    </div>
                                    {isSidebarOpen && <div className={` ${isAppsOpen && " rotate-90"} transition duration-500 mr-4`}>
                                        <svg
                                            width="34"
                                            height="34"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: isAppsOpen ? '#F93A0B' : '#888888' }} />
                                        </svg>
                                    </div>}
                                </div>
                                <span className={`absolute right-0 ${isAppsOpen ? isSidebarOpen && "bg-primary w-2 rounded-md" : "w-0"} h-full  transition-all duration-500 `}></span>
                            </li>
                        </Tippy>}

                        {/* render sidebar apps button when isSidebarOpen is true  */}
                        <>
                            {isSidebarOpen && <li onClick={handleAppsOpen} className={`flex pl-8 items-center ${isAppsOpen && "bg-[#FEEBE6] "} cursor-pointer relative border-primary duration-500 transition-all ${isSidebarOpen ? "py-4" : "py-6 rounded-lg hover:bg-[#FEEBE6] "} group w-full`}>
                                <div className="flex justify-between w-full ">
                                    <div className='flex gap-6'>
                                        <BsInfo className={` ${isAppsOpen ? "bg-primary" : "bg-[#aaaaaa]"} ${isSidebarOpen ? "duration-500" : "group-hover:bg-primary duration-100"} rounded-full text-white mt-1 cursor-pointer w-5 h-5  transition-all  `} />
                                        {isSidebarOpen && <p className={`text-[18px] font-medium ${isAppsOpen ? "text-primary" : "text-gray"} `}>Apps</p>}
                                    </div>
                                    {isSidebarOpen && <div className={` ${isAppsOpen && " rotate-90"} transition duration-500 mr-4`}>
                                        <svg
                                            width="34"
                                            height="34"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" style={{ fill: isAppsOpen ? '#F93A0B' : '#888888' }} />
                                        </svg>
                                    </div>}
                                </div>
                                <span className={`absolute right-0 ${isAppsOpen ? isSidebarOpen && "bg-primary w-2 rounded-md" : "w-0"} h-full  transition-all duration-500 `}></span>
                            </li>}

                            {/* email button  */}
                            {isAppsOpen && isSidebarOpen && <ul>
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
                        </>
                    </ul>
                </div>

                {isSidebarOpen && <div>
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
                </div>}
            </div >
        </div >
    )
}
