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
        <div className="first">
          <div className="post-list">
            {blogData &&
              blogData
                .slice(0, 10)
                .map((item) => <Post key={item.id} data={item} />)}
          </div>
        </div>
        <div className="most-read">
          <MostRead />
        </div>
        <div className="second">
          <div className="post-list">
            {blogData &&
              blogData
                .slice(10, 20)
                .map((item) => <Post key={item.id} data={item} />)}
          </div>
        </div>
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
        }
        .first {
          max-width: 75rem;
          margin: 0 auto;
        }
        .second {
          max-width: 75rem;
          margin: 0 auto;
        }
        .blog-background {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Blog;
