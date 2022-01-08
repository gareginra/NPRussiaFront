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
                    <div className="logo">
                        <Link href="/">
                            <a>
                                NP Russia
                            </a>
                        </Link>
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
                width: 100%;
                z-index:2;
                display: flex;
                position: fixed;
                background-color: #ffffff;
                margin: 0 auto 0 auto;
                min-height:3rem;
            }
            nav {
                justify-content: space-between;
                margin: 0 auto 0 auto;
                width:80rem;
                display: flex;
            }
            .categories {
                height: 50px;
                display: flex;
                font-weight: bold;
                white-space: nowrap;
            }
            .logo {
                position: absolute;
                left: 50%;
                font-size: 25px;
                margin-left: -55px;
                padding-top: 17px;
                font-weight: bold;
                padding-right: 0px;
                white-space: nowrap;
            }
            .right-side {
                display: flex;
                margin-left: auto;
                position: relative;
            }
            .links {
                display: flex;
                height:50px;
                padding-right:0px;
                outline: none;
                overflow: hidden;
            }
            .helper {
                margin: 0px;
                padding: 0px;
                outline: none;
                padding-right: 0px;
                font-weight: bold;
                width: 70px;
                height: 50px;
                overflow: visible;
                border-top: 3px solid #c31e1e;
                background-color: #d92121;
                font-size: 10px;
                color: #ffffff;
                letter-spacing: 1px;
                line-height: 15px;
                text-transform: uppercase;
                text-align: center;
                padding-top: 10px;
            }
            .helper:hover {
                padding-top: 15px;
                height: 55px;
                transition-duration: .2s;
            }
            .searchBox {
                height: 50px;
                overflow:hidden;
                padding-right: 0px;
            }
            .search:hover {
                margin-top: -50px;
                cursor: pointer;
            }
            @media (min-width: 120px) {
                nav {
                    max-width:80rem;
                    flex-wrap: wrap;
                }
                .logo {
                    margin: 1rem 0 1rem 0;
                }
            }
            @media (min-width: 800px) {
                .right-side{
                    visibility: visible;
                }
                .logo {
                    margin: 0;
                }
            }
        `}</style>
        </>
    )
}   