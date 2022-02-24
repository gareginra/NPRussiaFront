import views from "/public/images/views.png";
import Image from "next/image";

const MostReadPost = ({ id, arr }) => {
  id = id % arr.length;
  if (id < 0) {
    id = arr.length + id;
  }
  if (id >= arr.length) {
    id = id - arr.length;
  }
  const post = arr[id];
  return (
    <div className="mrp-background">
      <div className="mrp-image">
        <Image src={post.image} width="100%" height="100%" />
      </div>
      <div className="mrp-title">{post.title}</div>
      <div className="mrp-views">
        <div className="views-image">
          <Image src={views} />
        </div>
        <div className="views-count">{post.views}</div>
      </div>
      <style jsx>{`
        .mrp-background {
          background: white;
          padding: 2rem 0;
          width: 15rem;
          display: flex;
          flex-direction: column;
          border: 1rem solid #f2f2f2;
          border-top: 0;
        }
        .mrp-number {
          text-align: center;
          font-weight: bold;
          font-size: 1.5rem;
          color: #d92121;
          margin-bottom: 1rem;
        }
        .mrp-image {
          display: flex;
          justify-content: center;
        }
        .mrp-title {
          height: 0;
          font-size: 1.2rem;
          font-weight: bold;
          text-align: center;
          color: #1a1a1a;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 1rem;
        }
        .mrp-title:hover {
          color: #d92121;
        }
        .mrp-views {
          min-height: 2rem;
          margin-top: auto;
          padding-top: 7rem;
          display: flex;
          justify-content: center;
          display: flex;
          font-size: 0.7rem;
          font-weight: bold;
          color: #999999;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .views-image {
          max-height: 0.9rem;
          margin-top: 0.2rem;
          overflow: hidden;
        }
        .views-count {
          margin-left: 0.5rem;
          margin-top: 0.1rem;
        }
        .views-count:hover {
          color: #d92121;
        }
      `}</style>
    </div>
  );
};

export default MostReadPost;
