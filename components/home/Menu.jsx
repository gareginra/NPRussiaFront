"use strict";

import React, { Component } from "react";




const Menu = () => {
    return (
        <>
            <div className="menu-background">
                <ul className="menu">
                    <li>Кино</li>
                    <li>Искусство</li>
                    <li>Современная музыка</li>
                    <li>Академическая музыка</li>
                    <li>ЛитератураТеатр</li>
                    <li>Медиа</li>
                    <li>Общество</li>
                    <li>Наука</li>
                    <li>Colta Specials</li>
                </ul>
            </div>
            <style jsx>{` 
                .menu-background{
                    position:relative;
                    z-index:2;
                    width: 100%;
                    height:60px;
                    background:black;
                }
                .menu{
                    max-width:1200px;
                    margin: 0 auto 0 auto;
                    display: flex;
                    color: #ffffff;
                    list-style:none;
                }
                .menu li{
                    margin: 1.3rem 1rem 0 0;
                    font-size:0.9rem;
                    cursor:pointer;
                }
                .menu li:hover{
                    color:#cccccc;
                }
            `}</style>
        </>
    );

}

export default Menu;