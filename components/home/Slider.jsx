"use strict";

import React, { Component } from "react";
import Image from "next/image";
import sliderData from "/data/files/slider-images.js";

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
            <img src={sliderData[0].url} />
            <style jsx>{` 
                .slider-background{
                    width: 100%;
                    min-height:300px;
                    background:brown;
                }
            `}</style>
        </>
    );

}

export default Slider;