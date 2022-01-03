"use strict";

import React, { Component } from "react";
import Image from "next/image";
import sliderData from "/data/files/slider-images.js";
import testPic from "/data/files/images/slider/1.jpg";
const path = () => sliderData[0].url;

// const MyImage = (props) => {
//     return (
//       <Image
//         loader={path}
//         src={sliderData[0].url}
//         alt="Picture of the author"
//         width={500}
//         height={500}
//       />
//     )
//   }

const Slider = () => {
    return (
        <>
            <div className="slider-background">
                <div className="left slide">
                    <Image src={testPic} />
                </div>
                <div className="mainSlide">

                </div>
                <div className="right slide">
                    <Image src={testPic} />
                </div>
            </div>
            <style jsx>{` 
                .slider-background{
                    display: flex;
                    position: relative;
                    width: 100%;
                    min-height:300px;
                    background:brown;
                    z-index:-1;
                    margin-top: 50px;
                }
                .slide {
                    display:block;
                    position: relative;
                    width: 33vw;
                    min-height:300px;
                    background-color: black;
                    opacity: 10%;
                }
                .left {
                    float: left;
                }
                .right {
                    margin-left: auto;
                }
            `}</style>
        </>
    );

}

export default Slider;