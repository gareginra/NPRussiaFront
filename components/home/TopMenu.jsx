"use strict";

import React, { Component } from "react";

const TopMenu = () => {
    return (
        <div className="background-menu">
            <ul className="menu">
                <li>О проекте</li>
                <li>Помоги сайту</li>
                <li>Рассылка</li>
            </ul>
            <div className="menu-logo">
                <h1>NP Russia</h1>
            </div>
Test 2222
            <ul className="menu-social">
                <li>faceBook</li>
                <li>VK</li>
                <li>telegram</li>
                <li>twitter</li>
                <li>help</li>
                <li>search</li>
            </ul>
            <div className="menu-age">
                <p>18+</p>
            </div>
            <style jsx>{` 
                .menu{
                    display:flex;
                    list-style:none;
                    font-weight:bold;
                }
                .menu li{
                    margin:0.6rem;
                }
                .menu li:hover{
                   color:red;
                }
                .menu-logo{
                    margin:-0.5rem 0;
                }
                .menu-social{
                    display:flex;
                    list-style:none;
                }
                .menu-social li{
                    margin:0.6rem;
                }
                .background-menu{
                    max-width:1200px;
                    margin:0 auto 0 auto;
                    display:flex;
                    justify-content:space-between; 
                }
                .menu-age{
                    margin:0.6rem;
                }
            `}</style>
        </div>

    )
}



export default TopMenu;
