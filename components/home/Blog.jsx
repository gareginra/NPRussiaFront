"use strict";

import React, {useState } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
const Blog = () => {
    return (
        <div className="blog-background">
            <div className="list">

                <div className="mob">
                    <Post id={1} mob/>
                </div>
                <div className="first-half">
                    <div className="two post-list">
                        <div className="row">
                            <Post id={5} />
                            <Post id={6} />
                        </div>
                        <div className="row">
                            <Post id={7} />
                            <Post id={8} />
                        </div>
                    </div>
                    <div className="three post-list">
                        <div className="row">
                            <Post id={0} />
                            <Post id={5} />
                            <Post id={1} />
                        </div>
                        <div className="row">
                            <Post id={4} />
                            <Post id={2} />
                            <Post id={3} />
                        </div>
                    </div>
                    <div className="ad">Advertisement</div>
                </div>
                <div className="most-read">
                    <MostRead />
                </div>
            </div>
            <style jsx>{`
                @media (min-width:0px) {
                    .mob {
                        visibility: visible;
                        position: relative;
                    }
                    .first-half div {
                        visibility: hidden;
                        position: absolute;
                    }
                }
                @media (min-width:800px) {
                    .mob {
                        visibility: hidden;
                        position: absolute;
                        display: none;
                    }
                    .first-half div {
                        visibility: visible;
                        position: relative;
                    }
                    .list {
                        display: flex;
                        flex-direction: column;
                    }
                    .three div{
                        visibility: hidden;
                        position: absolute;
                        display: none;
                    }
                    .post-list {
                        margin-top: 2rem;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }
                    .row {
                        display: flex;
                        justify-content: space-between;
                    }
                    .first-half {
                        display: flex;
                        justify-content: center;
                    }
                    .ad {
                        margin: 2rem 0 0 0;
                        width: 20rem;
                        border: 1px dashed green;
                    }
                    .gray-bg div {
                        visibility: hidden;
                    }
                }
                @media (min-width: 850px) {
                    .row {
                        gap: 1rem;
                    }
                    .ad {
                        margin-left: 1rem;
                    }
                }
                @media (min-width: 900px) {
                    .row {
                        gap: 2rem;
                    }
                }
                @media (min-width:1400px) {
                    .mob {
                        visibility: hidden;
                        position: absolute;
                    }
                    .two {
                        visibility: hidden;
                        position: absolute;
                        display: none;
                    }
                    .three div{
                        visibility: visible;
                        position: relative;
                        display: flex;
                    }
                    .three {
                        visibility: visible;
                        position: relative;
                    }
                }
                .blog-background {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    )

}

export default Blog;