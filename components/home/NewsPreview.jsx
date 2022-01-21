import Link from "next/link";
import newsData from "/data/files/news";
let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export default function NewsPreview ({id}) {
    id = id%newsData.length;
    if (id < 0) {
        id = newsData.length - id;
    }
    if (id >= newsData.length) {
        id = id - newsData.length;
    }
    const date = new Date(newsData[id].date).getDate().toString() + " " + months[new Date(newsData[id].date).getMonth()];
    const hours = new Date(newsData[id].date).getHours().toString()<10?"0"+new Date(newsData[id].date).getHours().toString():new Date(newsData[id].date).getHours().toString();
    const minutes = new Date(newsData[id].date).getMinutes().toString()<10?"0"+new Date(newsData[id].date).getMinutes().toString():new Date(newsData[id].date).getMinutes().toString();
    const time = hours + ":" + minutes;
    const link = newsData[id].link;
    const title = newsData[id].title;
    return (
        <>
            <p className="date">{new Date().getDate() == new Date(newsData[id].date).getDate() ? "" : date + " "}{time}</p>
            <Link href={"/news"+link}>
                <p className="title"><a>{title}</a></p>
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