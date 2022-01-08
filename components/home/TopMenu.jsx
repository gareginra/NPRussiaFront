import Link from "next/link";
import Image from "next/dist/client/image";
import MenuButton from "./MenuButton";
import fb from "/data/files/images/fb.png";
import vk from "/data/files/images/vk.png";
import telegram from "/data/files/images/telegram.png";
import twitter from "/data/files/images/twitter.png";
import rss from "/data/files/images/rss.png";
import helper from "/data/files/images/helper-bottom.png";
import search from "/data/files/images/search.png";
export default function TopMenu () {
    return (
        <>
            <div className="topbar">
                <nav>
                    <div className="categories">
                        <MenuButton link="/about" text="О проекте" />
                        <MenuButton link="/donate" text="Помоги сайту" />
                        <MenuButton link="/subscribe" text="Рассылка" />
                    </div>
                    <div className="logo-box">
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    NP Russia
                                </a>
                            </Link>
                        </div>
                    </div>
                    <span className="right-side">
                        <div className="links">
                            <MenuButton link="https://fb.com" img={fb} />
                            <MenuButton link="https://vk.com" img={vk} />
                            <MenuButton link="https://t.me" img={telegram} />
                            <MenuButton link="https://twitter.com" img={twitter}  />
                            <MenuButton link="/feed" img={rss} />
                        </div>
                        <div className="helper">
                            <Link href="/about">
                                <a>Помоги сайту</a>
                            </Link>
                            <Image src={helper} />
                        </div>
                        <div className="searchBox">
                            <div className="search">
                                <Image src={search} />
                            </div>
                        </div>
                    </span>
                </nav>
            </div>
        <style jsx>{`
            .topbar {
                z-index:2;
                display: flex;
                position: relative;
                min-width: 100rem;
                background-color: #ffffff;
                min-height: 3rem;
                align-items:center;
                justify-content: center;
            }
            nav {
                position: absolute;
                width: 80rem;
                min-width: 400px;
                margin: auto;
                display: flex;
                align-items:center;
                justify-content: center;
            }
            .categories {
                display: flex;
                font-weight: bold;
                float: left;
            }
            .logo-box {
                position: relative;
                font-size: 1.5rem;
                font-weight: bold;
                margin: auto;
                align-items:center;
                justify-content: center;
            }
            .logo {
                margin-right: 1.5rem;
                padding-left: 1.5rem;
            }
            .right-side {
                height:3em;
                display: flex;
                position: relative;
            }
            .links {
                display: flex;
                height: 3rem;
                overflow: hidden;
            }
            .helper {
                position: relative;
                font-weight: bold;
                height: 3rem;
                width: 4rem;
                border-top: 3px solid #c31e1e;
                background-color: #d92121;
                font-size: .62rem;
                color: #ffffff;
                letter-spacing: .1rem;
                line-height: .93rem;
                text-transform: uppercase;
                text-align: center;
                padding-top: 0.5rem;
            }
            .helper:hover {
                overflow: visible;
                padding-top: 0.9rem;
                height: 3.4rem;
                transition-duration: .2s;
            }
            .searchBox {
                overflow:hidden;
                padding-right: 0px;
            }
            .search:hover {
                margin-top: -100%;
                cursor: pointer;
            }
        `}</style>
        </>
    )
}   