"use strict";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sliderData from "/data/files/slider-images.js";
import arrows from "/data/files/images/banner-arrows.png";
let descriptionBar = 0;

const Slider = () => {
    const [selectedPic, setSelectedPic] = useState(0);
    const leftImageSrc = selectedPic?sliderData[selectedPic-1].url:sliderData[sliderData.length-1].url;
    const mainImageSrc = sliderData[selectedPic].url;
    const rightImageSrc = (selectedPic === sliderData.length-1)?sliderData[0].url:sliderData[selectedPic+1].url;
    const mainSlideData = {title: sliderData[selectedPic].title, description: sliderData[selectedPic].description};
    
    return (
        <>
            <div className="slider-background">
                <div className="left slide">
                    <Image
                        priority
                        src={leftImageSrc}
                        height='600px'
                        width='1000vw'
                        objectFit="cover"
                    />
                    <div className="shader" />
                    <div className="arrowBox">
                        <div className="leftArrow arrow" onClick={() => selectedPic?setSelectedPic(selectedPic-1):setSelectedPic(selectedPic = sliderData.length-1)}>
                            <Image src={arrows} objectFit="fill"/>
                        </div>
                    </div>
                </div>
                <div className="mainSlide">
                    <Image           
                        priority
                        src={mainImageSrc}
                        height='600px'
                        width='1000vw'
                        objectFit="cover"
                    />
                    <div className="mainSlideShader">
                        <div className="text">
                            <p className="title">{mainSlideData.title}</p>
                            <p className="description">{mainSlideData.description}</p>
                        </div>
                    </div>
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
                        <div className="rightArrow arrow" onClick={() => (selectedPic===sliderData.length-1)?setSelectedPic(selectedPic = 0):setSelectedPic(selectedPic+1)}>
                            <Image src={arrows} objectFit="fill"/>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .slider-background{
                    display: flex;
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    min-width: 1000px;
                    height: 600px;
                }
                .mainSlide {
                    position: relative;
                    width: 33.3333vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 5px solid red;
                    object-fit: cover;
                }
                .slide {
                    width: 33.3333vw;
                    height: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 5px solid grey;
                }
                .shader {
                    position: absolute;
                    background-color:black;
                    width: inherit;
                    height: inherit;
                    opacity: 80%;
                    margin-top: -5px;
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
                    transition-property: all .2s;
                    margin-left: -100%;
                }
                .arrow:hover {
                    margin-top: -100%;
                    cursor: pointer;
                }
                .mainSlideShader {
                    position: absolute;
                    bottom: 0px;
                    width: 33.3333vw;
                    display: block;
                    font-family: 'ConquerorText';
                    line-height: 30px;
                    text-align: center;
                    cursor: pointer;
                    height: auto;
                    max-height: 100px;
                    transition: all 1s;
                    background: rgba(0, 0, 0, 0.6);
                }
                .mainSlideShader:hover {
                    max-height: 500px;
                }
                .text {
                    z-index:2;
                    color: white;
                }
                .title {
                    font-size: 30px;
                    font-weight: bold;
                }
                .description {
                    position: absolute;
                    font-size: 21px;
                    overflow: hidden;
                    transition: all 2s linear;
                }
                .description:hover {
                    overflow: visible;
                }
            `}</style>
            <div dangerouslySetInnerHTML={{
       
                __html: `
                    <script>
                        if (typeof window !== undefined) {
                            let shaderDiv = document.getElementsByClassName('mainSlideShader')[0];
                            let descDiv;
                            let temp;
                            let counter = 0;
                            let interval;
                            shaderDiv.addEventListener('mouseenter', () => {
                                descDiv = document.getElementsByClassName('description')[0];
                                temp = descDiv.innerHTML;
                                descDiv.innerHTML = '';
                                interval = setInterval(() => {
                                    if (counter < temp.length) {
                                        descDiv.innerHTML += temp[counter];
                                        counter++;
                                    }
                                }, 10)
                                descDiv.style.visibility = 'visible';
                                descDiv.style.position = 'relative';
                                shaderDiv.style.maxHeight = '';
                            });
                            shaderDiv.addEventListener('mouseleave', () => {
                                clearInterval(interval);
                                descDiv.innerHTML = temp;
                                counter = 0;
                                descDiv.style.position = 'absolute';
                                shaderDiv.style.maxHeight = '100px';
                                descDiv.style.visibility = 'hidden';
                            });
                        }
                    </script>`
            }}/>
        </>
    );
}
export default Slider;