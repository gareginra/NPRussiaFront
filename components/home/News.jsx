"use strict";

import React, { Component } from "react";

const News = () => {
    return (
        <div className="background-menu">

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



export default News;
