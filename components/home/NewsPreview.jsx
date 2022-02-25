import Link from "next/link";
import newsData from "/data/files/news";
import dateProcessor from "../../lib/dateProcessor";

const NewsPreview = ({ id }) => {
  id = id % newsData.length;
  if (id < 0) {
    id = newsData.length + id;
  }
  if (id >= newsData.length) {
    id = id - newsData.length;
  }
  const post = newsData[id];
  return (
    <div className="news-card">
      <p className="date">{dateProcessor(post.date)}</p>
      <Link href={"/news" + post.link}>
        <p className="title">
          <a>{post.title}</a>
        </p>
      </Link>
      <style jsx>
        {`
          .news-card {
            width: 15rem;
          }
          .date {
            color: gray;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .title {
            font-weight: bold;
            font-size: 1rem;
            color: #1a1a1a;
            cursor: pointer;
          }
          .title:hover {
            color: #d92121;
            transition: all 0.2s;
          }
        `}
      </style>
    </div>
  );
};
export default NewsPreview;
