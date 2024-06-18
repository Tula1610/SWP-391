import React from 'react'
import "./topbar.css"
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { Link } from 'react-router-dom';



export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className='linkAdminPage'>
                    <span className="logo">Admin Page</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <IoMdNotificationsOutline />
                        <span className="topIconBagde">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <GrLanguage />
                    </div>
                    <div className="topbarIconsContainer">
                        <IoMdSettings />
                    </div>
                    <img src="./assets/imgs/meow.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
