"use strict";

import React, {useState } from "react";
import Post from "./Post";

const Blog = () => {
    return (
        <div className="blog-background">
            <div className="mob">
                <Post id={1} mob/>
            </div>
            <div className="list">
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
            <style jsx>{`
                @media (min-width:0px) {
                    .mob {
                        visibility: visible;
                        position: relative;
                    }
                    .two {
                        visibility: hidden;
                        position: absolute;
                    }
                    .three {
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
                    .two {
                        visibility: visible;
                        position: relative;
                    }
                    .three div{
                        visibility: hidden;
                        position: absolute;
                        display: none
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
                    .list {
                        display: flex;
                        justify-content: center;
                        width: 100%;
                    }
                    .ad {
                        margin: 2rem 0 0 0;
                        width: 20rem;
                        border: 1px dashed green;
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
            `}</style>
        </div>
    )

}

export default Blog;