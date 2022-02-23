import React, { useState, useEffect } from "react";
import MostReadPost from "./MostReadPost";
import data from "/data/files/posts.js";
const MostRead = () => {
  const arr = data
    .slice()
    .sort((a, b) => new Date(a.views) - new Date(b.views))
    .reverse();
  const [width, setWidth] = useState(0);
  const [mrID, setMRID] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(
    () =>
      setInterval(() => {
        if (
          width !==
          window.document.getElementsByClassName("most-read")[0].offsetWidth
        ) {
          width =
            window.document.getElementsByClassName("most-read")[0].offsetWidth;
          setWidth(width);
        }
      }, 100),
    []
  );
  const scrollLeft = (i) => {
    mrID ? setMRID(mrID - i) : setMRID(arr.length - i);
  };
  const scrollRight = (i) => {
    mrID == arr.length - i ? setMRID(0) : setMRID(mrID + i);
  };
  console.log(arr);
  return (
    <div className="mr-background">
      <div className="mr-carousel">
        <div className="mr-top">
          <div className="title">Самое читаемое</div>
          <div className="arrows">
            <div className="arrow" onClick={() => setCount(count--)}>
              ←
            </div>
            <div className="arrow" onClick={() => setCount(count++)}>
              →
            </div>
          </div>
        </div>
        <div className="mr-bottom">
          {data.map((item) => (
            <div key={item.id}>
              <MostReadPost id={item.id + count} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 0px) {
          .mr-four {
            visibility: hidden;
            position: absolute;
          }
          .mr-three {
            visibility: hidden;
            position: absolute;
          }
          .mob {
            visibility: visible;
            position: relative;
          }
          .title {
            margin-left: 1rem;
          }
          .arrows {
            margin-right: 1rem;
          }
        }
        @media (min-width: 800px) {
          .mr-four {
            visibility: hidden;
            position: absolute;
          }
          .mr-three {
            visibility: visible;
            position: relative;
          }
          .mob {
            visibility: hidden;
            position: absolute;
          }
          .title {
            margin: 0;
          }
          .arrows {
            margin-right: 0;
          }
        }
        @media (min-width: 1400px) {
          .mr-three {
            visibility: hidden;
            position: absolute;
          }
          .mr-four {
            visibility: visible;
            position: relative;
          }
        }
        .mr-background {
          display: flex;
          justify-content: center;
          background-color: #f2f2f2;
          position: absolute;
          width: 100%;
          left: 0;
        }
        .mr-carousel {
          width: ${width}px;
        }
        .mr-top {
          display: flex;
          border-top: 5px solid #d92121;
          margin: auto;
          padding-top: 1rem;
        }
        .mr-bottom {
          display: flex;
          justify-content: space-around;
          overflow: hidden;
          margin-top: 0.5rem;
        }
        .title {
          overflow: hidden;
          margin-right: auto;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #d92121;
          font-weight: bold;
          font-size: 1.5rem;
        }
        .arrows {
          display: flex;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-style: monospace;
        }
        .arrow {
          display: flex;
          border: 0.15rem solid grey;
          padding-bottom: 0.19rem;
          justify-content: center;
          align-items: center;
          border-radius: 99999px;
          height: 2rem;
          width: 2rem;
        }
        .arrow:hover {
          color: red;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MostRead;
