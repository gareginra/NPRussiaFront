"use strict";

import React, {useState } from "react";
import data from "/data/files/posts.js";
import Link from "next/link";
import Image from "next/image";
import dateProcessor from "../../lib/dateProcessor";
import views from "/public/images/views.png";
const Post = ({id, mob}) => {
    const imgSrc = data[id].image;
    return ( mob ?
        <div className="post-background">
                <Image src={imgSrc} height="1000vh" width="1000vw" />
            <div className="category">
                <p>{data[id].category}</p>
            </div>
            <div className="title">
                {data[id].title}
            </div>
            <div className="description">
                {data[id].description}
            </div>
            <div className="date">
                {dateProcessor(data[id].date)}
                    {/* <Link href={data[id].title} >
                        <a> */}
                            <div className="views">
                                <div className="image">
                                    <Image src={views} />
                                </div>
                                <div className="views-count">{data[id].views}</div>
                            </div>
                        {/* </a>
                    </Link> */}
            </div>
            <style jsx>{`
                .post-background {
                    display: flex;
                    flex-direction: column;
                }
                .category {
                    border-top: 5px solid #d92121;
                    overflow: hidden;
                    margin-right: auto;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #d92121;
                    font-weight: bold;
                    font-size: 1rem;
                    padding-left: .5rem;
                }
                .title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin: 0 .5rem 0 .5rem;
                    color: #1a1a1a;
                }
                .description {
                    font-size: 1.2rem;
                    color: #1a1a1a;
                    margin: 0 .5rem 0 .5rem;
                    line-height: 1.5rem;
                    padding: .75rem 0 .75rem 0;
                }
                .date {
                    display: flex;
                    margin: .5rem;
                    font-size: .8rem;
                    font-weight: bold;
                    color: #999999;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .views {
                    display: flex;
                    margin-left: 2rem;
                }
                .image {
                    width: 100%;
                    height: 50%;
                    max-height: .9rem;
                    margin-top: .2rem;
                    overflow: hidden;
                }
                .views-count {
                    margin-left: .5rem;
                }
            `}</style>
        </div>
        :
        <div className="post-background">
            <div className="pic">
                <Image src={imgSrc} height="1000vh" width="1000vw" />
            </div>
            <div className="category">
                <p>{data[id].category}</p>
            </div>
            <div className="title">
                {data[id].title}
            </div>
            <div className="description">
                {data[id].description}
            </div>
            
            <div className="date">
                {dateProcessor(data[id].date)}
                    {/* <Link href={data[id].title} >
                        <a> */}
                            <div className="views">
                                <div className="image">
                                    <Image src={views} />
                                </div>
                                <div className="views-count">{data[id].views}</div>
                            </div>
                        {/* </a>
                    </Link> */}
            </div>
            <style jsx>{`
                @media (min-width: 800px) {
                    .post-background {
                        display: flex;
                        flex-direction: column;
                        max-width: 15rem;
                        margin: 0 auto 1rem auto;
                        transition: all 2s;
                    }
                    .pic {
                        height: 15rem;
                        width: 15rem;
                        object-fit: fill;
                    }
                    .category {
                        border-top: 5px solid #d92121;
                        overflow: hidden;
                        margin-right: auto;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        color: #d92121;
                        font-weight: bold;
                        cursor: pointer;
                        font-size: .75rem;
                    }
                    .category:hover {
                        color: #999999
                    }
                    .title {
                        font-size: 2rem;
                        font-weight: bold;
                        color: #1a1a1a;
                        letter-spacing: 1px;
                        cursor: pointer;
                        transition: all .2s;
                    }
                    .title:hover {
                        color: #d92121;
                    }
                    .description {
                        font-size: 1.2rem;
                        color: #1a1a1a;
                        line-height: 1.5rem;
                        padding: .75rem 0 .75rem 0;
                    }
                    .date {
                        display: flex;
                        font-size: .7rem;
                        font-weight: bold;
                        color: #999999;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }
                    .views {
                        display: flex;
                        margin-left: 2rem;
                    }
                    .image {
                        width: 100%;
                        height: 50%;
                        max-height: .9rem;
                        margin-top: .1rem;
                        overflow: hidden;
                    }
                    .views-count {
                        margin-left: .5rem;
                        margin-top: .1rem;
                    }
                    .views-count:hover {
                        color: #d92121;
                    }
                } 
                @media (min-width: 1400px) {
                    .post-background {
                        max-width: 17rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default Post;