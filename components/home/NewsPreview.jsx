import Link from "next/link";
import newsData from "/data/files/news";
import dateProcessor from "../../lib/dateProcessor";

const NewsPreview = ({id}) => {
    id = id%newsData.length;
    if (id < 0) {
        id = newsData.length - id;
    }
    if (id >= newsData.length) {
        id = id - newsData.length;
    }
    return (
        <>
            <p className="date">{dateProcessor(newsData[id].date)}</p>
            <Link href={"/news"+newsData[id].link}>
                <p className="title"><a>{newsData[id].title}</a></p>
            </Link>
            <style jsx>
                {`
                    .date {
                        color: gray;
                        font-size: .7rem;
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
                        transition: all .2s;
                    }
                `}
            </style>
        </>
    )
}
export default NewsPreview;