"use strict";

import React, { useState, useEffect } from "react";
import MostRead from "./MostRead";
import Post from "./Post";
import BlogService from "../../lib/services/BlogService";
const Blog = ({ page }) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const blogCheckResponse = async () => {
      const blogResponse = await BlogService.get();
      setBlogData(blogResponse);
    };
    blogCheckResponse();
  }, []);
  return (
    <div className="blog-background">
      <div className="list">
          <div className="mob">
            {blogData &&
                blogData
                  .slice(0, 10)
                  .map((item) => <Post key={item.id} data={item} mob />)}
          </div>
          <div className="post-list">
            {blogData &&
              blogData
                .slice(0, 10)
                .map((item) => <Post key={item.id} data={item} />)}
          </div>
        <div className="most-read">
          <MostRead />
        </div>
          <div className="post-list">
            {blogData &&
              blogData
                .slice(10, 20)
                .map((item) => <Post key={item.id} data={item} />)}
          </div>
      </div>
      <style jsx>{`
        @media (min-width: 0px) {
          .mob {
            visibility: visible;
            position: relative;
          }
          .post-list {
            visibility: hidden;
            position: absolute;
          }
        }
        @media (min-width: 600px) {
          .mob {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .list {
            display: flex;
            flex-direction: column;
            max-width: 75rem;
            justify-content: center;
          }
          .three div {
            visibility: hidden;
            position: absolute;
            display: none;
          }
          .post-list {
            visibility: visible;
            position: relative;
            margin-top: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
        }
        .blog-background {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .most-read {
          height: 24rem;
        }
      `}</style>
    </div>
  );
};

export default Blog;
