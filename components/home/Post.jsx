"use strict";

import React, {useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dateProcessor from "../../lib/dateProcessor";
import views from "/public/images/views.png";
const Post = ({data, mob}) => {
    console.log(data)
    const pageSrc = data.title;  /* to be changed */
    const categoryLink = data.category; /* to be changed */
    const imgSrc = data.image;
    return ( mob ?
        <div className="post-background">
            <Link href={pageSrc}>
                <a>
                    <div className="pic">
                        <Image priority src={imgSrc} layout="fill" objectFit="cover" />
                    </div>
                </a>
            </Link>
            <div className="category">
                <Link href={categoryLink} >
                    <a>
                        <p>{data.category}</p>
                    </a>
                </Link>
            </div>
            <Link href={pageSrc}>
                <a>
                    <div className="title" title={data.title}>
                        {data.title}
                    </div>
                </a>
            </Link>
            <div className="description" title={data.description}>
                {data.description}
            </div>
            <div className="date">
                {dateProcessor(data.createdAt)}
                    <Link href={pageSrc}>
                        <a>
                            <div className="views">
                                <div className="image">
                                    <Image src={views} />
                                </div>
                                <div className="views-count">{data.views}</div>
                            </div>
                        </a>
                    </Link>
            </div>
            <style jsx>{`
                .post-background {
                    padding: .5rem .5rem 0 .5rem;
                    display: flex;
                    flex-direction: column;
                }
                .pic {
                    position: relative;
                    width: 100%;
                    min-height: 20rem;
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
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                            line-clamp: 2; 
                    -webkit-box-orient: vertical;
                    margin: 0 .5rem 0 .5rem;
                    color: #1a1a1a;
                }
                .description {
                    font-size: 1.2rem;
                    color: #1a1a1a;
                    margin: 0 .5rem 0 .5rem;
                    line-height: 1.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                            line-clamp: 3; 
                    -webkit-box-orient: vertical;
                    margin: .5rem 0 0 .5rem;
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
            <Link href={pageSrc} >
                <a>
                    <div className="pic">
                        <Image priority src={imgSrc} layout="fill" objectFit="cover"/>
                    </div>
                </a>
            </Link>
            <div className="category">
                <Link href={categoryLink} >
                    <a>
                        <p>{data.category}</p>
                    </a>
                </Link>
            </div>
            <Link href={pageSrc} >
                <a>
                    <div className="title" title={data.title}>
                        {data.title}
                    </div>
                </a>
            </Link>
            <div className="description" title={data.description}>
                {data.description}
            </div>
            <div className="date">
                {dateProcessor(data.createdAt)}
                <Link href={pageSrc} >
                    <a>
                        <div className="views">
                            <div className="image">
                                <Image src={views} />
                            </div>
                            <div className="views-count">{data.views}</div>
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .post-background {
                    display: flex;
                    flex-direction: column;
                    max-width: 16rem;
                    margin: 1rem;
                    transition: all 2s;
                }
                .pic {
                    position: relative;
                    min-height: 15rem;
                    max-width: 25rem;
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
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #1a1a1a;
                    letter-spacing: 1px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                            line-clamp: 2; 
                    -webkit-box-orient: vertical;
                    cursor: pointer;
                    transition: all .2s;
                }
                .title:hover {
                    color: #d92121;
                }
                .description {
                    font-size: 1rem;
                    color: #1a1a1a;
                    line-height: 1.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                            line-clamp: 3; 
                    -webkit-box-orient: vertical;
                    margin: .75rem 0 .75rem 0;
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
            `}</style>
        </div>
    )
}

export default Post;