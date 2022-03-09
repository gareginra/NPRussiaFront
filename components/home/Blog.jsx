"use strict";

import React, { useState, useEffect } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
import BlogService from "../../lib/services/BlogService";
const Blog = ({page}) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get();
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  }, []);
  return (blogData[0] ?
    <div className="blog-background">
      <div className="list">
        <div className="mob">
          {blogData.slice(0,10).map((item) => (
            <Post data={item} mob/>
          ))}
        </div>
        <div className="first">
            <div className="post-list">
              {blogData.slice(0,10).map((item) => (
                <Post data={item} />
              ))}
            </div>
            {/* <div className="ad">Advertisement</div> */}
        </div>
        <div className="most-read">
            <MostRead />
        </div>
        <div className="second">
            <div className="post-list">
              {blogData.slice(10,20).map((item) => (
                <Post data={item} />
              ))}
            </div>
            {/* <div className="ad">Advertisement</div> */}
        </div>
        {/* <div className="half second">
                    <div className=" post-list">
                        <div className="row">
                            <Post id={5} />
                            <Post id={6} />
                            <Post id={6} />
                        </div>
                        <div className="row">
                            <Post id={7} />
                            <Post id={8} />
                            <Post id={8} />
                        </div>
                    </div>
                    <div className="three post-list">
                        <div className="row">
                            <Post id={0} />
                            <Post id={5} />
                            <Post id={1} />
                            <Post id={1} />
                        </div>
                        <div className="row">
                            <Post id={4} />
                            <Post id={2} />
                            <Post id={7} />
                            <Post id={3} />
                        </div>
                    </div>
                </div> */}
      </div>
      <style jsx>{`
        @media (min-width: 0px) {
          .mob {
            visibility: visible;
            position: relative;
          }
          .half div {
            visibility: hidden;
            position: absolute;
          }
        }
        @media (min-width: 800px) {
          .mob {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .half div {
            visibility: visible;
            position: relative;
          }
          .list {
            display: flex;
            flex-direction: column;
          }
          .three div {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .post-list {
            margin-top: 2rem;
            max-width: 95rem;
            display: flex;
            flex-wrap: wrap;
            justify-items: center;
          }
          // .ad {
          //   margin: 2rem 0 0 0;
          //   width: 20rem;
          //   border: 1px dashed green;
          // }
          .second {
            margin-top: 20rem;
          }
        }
        .blog-background {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .most-read {
          height: 100px;
        }
      `}</style>
    </div>
    :<></>
  );
};

export default Blog;
