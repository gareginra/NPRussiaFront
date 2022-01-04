"use strict";

import React, { Component } from "react";




const Menu = () => {
    return (
        <>
            <div className="menu-background">
                <div className="menu"><ul>
                    <li>Кино</li>
                    <li>Искусство</li>
                    <li>Современная музыка</li>
                    <li>Академическая музыка</li>
                    <li>ЛитератураТеатр</li>
                    <li>Медиа</li>
                    <li>Общество</li>
                    <li>Наука</li>
                    <li>Colta Specials</li></ul>
                </div>
            </div>
            <style jsx>{` 
                .menu-background{
                    margin-top:50px;
                    z-index:2;
                    width: 100%;
                    height:50px;
                    background:black;
                    display: flex;
                }
                .menu{
                    max-width:1200px;
                    margin: 0 auto 0 auto;
                    color: #ffffff;
                    list-style:none;
                }
                .menu li{
                    float:left;
                    margin: 0 1rem 0 1rem;
                    font-size:0.9rem;
                    cursor:pointer;
                    list-style-type:none;
                }
                .menu li:hover{
                    color:#cccccc;
                }
            `}</style>
        </>
    );

}

export default Menu;