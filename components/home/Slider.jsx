"use strict";
import Menu from "./Menu.jsx"
import React, { useState } from "react";
import Image from "next/image";
import sliderData from "/data/files/slider-images.js";
import arrows from "/data/files/images/banner_arrows.png"
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
    const [selectedPic, setCount] = useState(0);
    const leftImageSrc = selectedPic?sliderData[selectedPic-1].url:sliderData[sliderData.length-1].url;
    const mainImageSrc = sliderData[selectedPic].url;
    const rightImageSrc = (selectedPic === sliderData.length-1)?sliderData[0].url:sliderData[selectedPic+1].url;
    return (
        <>
            <div className="slider-background">
                <div className="left slide">
                    <Image
                        priority
                        src={leftImageSrc}
                        height='1000%'
                        width='1000vw'
                        objectFit="cover"
                    />
                    <div className="shader" />
                    <div className="arrowBox">
                        <div className="leftArrow arrow" onClick={() => selectedPic?setCount(selectedPic-1):setCount(selectedPic = sliderData.length-1)}>
                            <Image src={arrows} className="leftArrow" objectFit="fill"/>
                        </div>
                    </div>
                </div>
                <div className="mainSlide slide">
                    <Image
                            priority
                            src={mainImageSrc}
                            height='1000%'
                            width='1000vw'
                            objectFit="cover"
                    />
                </div>
                <div className="right slide">
                    <Image
                            priority
                            src={rightImageSrc}
                            height='1000%'
                            width='1000vw'
                            objectFit="cover"
                    />
                    <div className="shader" />
                    <div className="arrowBox">
                        <div className="rightArrow arrow" onClick={() => (selectedPic===sliderData.length-1)?setCount(selectedPic = 0):setCount(selectedPic+1)}>
                            <Image src={arrows} className="rightArrow" objectFit="fill"/>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{` 
                .slider-background{
                    display: flex;
                    position: relative;
                    width: 100%;
                    top: 50px;
                    overflow: visible;
                }
                .slide {
                    width: 33.3vw;
                    height:100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .shader {
                    z-index:1;
                    position: absolute;
                    background-color:black;
                    width: inherit;
                    height: inherit;
                    opacity: 80%;
                }
                .left {
                    float: left;
                }
                .right {
                    margin-left: auto;
                }
                .arrowBox {
                    position: absolute;
                    z-index:2;
                    height: 70px;
                    width: 70px;
                    overflow: hidden;
                    display:block;
                }
                .leftArrow {
                    width: 200%;
                    height: 300%;
                }
                .rightArrow {
                    width: 200%;
                    height: 300%;
                    margin-left: -100%;
                }
                .arrow:hover {
                    margin-top: -100%;
                    cursor: pointer;
                    transition-property: color;
                    transition-duration: .2s;
                }
            `}</style>
            {/* <Menu /> */}
        </>
    );

}

// function changePic(arg) {
//     if (arg==="left") {
        
//     }
// }
export default Slider;