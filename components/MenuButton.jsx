import Link from "next/link";
import Image from "next/dist/client/image";

export default function menuButton ({link, text, img}) {
    return (
        <div>
            <div className="button">
                <Link href={link}>
                    {!img ? 
                        <div className="text">
                            <a>{text}</a>
                        </div>
                    :
                        <div className="image">
                            <a>
                                    <Image src={img} />
                            </a>
                        </div>
                    }
                </Link>
            </div>

            <style jsx>{`
                .button{
                    margin: 0px;
                    padding: 0px;
                    outline: none;
                }
                .text {
                    font-family: inherit;
                    font-size: 14px;
                    color: #inherit;
                    margin-top: 17px;
                    margin-right: 25px;
                    text-align: center;
                }
                .text:hover {
                    transition-property: border, background-color, color;
                    transition-duration: .2s;
                    color: #d92121;
                    cursor: pointer;
                }
                .image {
                    width: 50px;
                    height: 50px;
                    display: block;
                }
                .image:hover {
                    margin-top: -50px;
                    cursor: pointer;
                }
            `}</style>
        </div>
        
    )
}