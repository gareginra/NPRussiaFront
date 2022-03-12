"use strict";

import React, { useState } from "react";

const Pagination = ({page=1, last, moveToPage, addPosts}) => {
    if (page > last || page <= 0) {
        return;
    }
    const [pageNumber, setPageNumber] = useState(page);
    return (
        <div className="pag-background">
            <div className="pag-box mob" onClick={() => addPosts()}>Показать ещё</div>
            <div className="pag-box wide-screen">
                {pageNumber > 1 ?
                    <>
                        <div className="clickable back" onClick={()=> {moveToPage(pageNumber-1); setPageNumber(pageNumber-1)}}>Назад</div>
                        <div className="clickable square" onClick={()=> {moveToPage(1); setPageNumber(1)}}>1</div>
                        {pageNumber > 4 ?
                            <>
                                <div className="square">…</div>
                                <div className="clickable square" onClick={()=> {moveToPage(pageNumber-2); setPageNumber(pageNumber-2)}}>{pageNumber-2}</div>
                                <div className="clickable square" onClick={()=> {moveToPage(pageNumber-1); setPageNumber(pageNumber-1)}}>{pageNumber-1}</div>
                                <div className="unclickable square">{pageNumber}</div>
                            </>
                        :
                            pageNumber == 2 ?
                                <div className="unclickable square">2</div>
                            :
                                <>
                                    <div className="clickable square" onClick={()=> {moveToPage(2); setPageNumber(2)}}>2</div>
                                    {pageNumber == 3 ?
                                        <div className="unclickable square">3</div>
                                    :
                                        <>
                                            <div className="clickable square" onClick={()=> {moveToPage(3); setPageNumber(3)}}>3</div>
                                            <div className="unclickable square">4</div>
                                        </>
                                    }
                                </>
                        }
                    </>
                :
                    <>
                        <div className="unclickable back">Назад</div>
                        <div className="unclickable square">1</div>
                    </>
                }
                {pageNumber !== last ?
                    last-pageNumber == 1 ?
                        <>
                            <div className="clickable square" onClick={()=> {moveToPage(last);  setPageNumber(last)}}>{last}</div>
                            <div className="clickable forward" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>Вперёд</div>
                        </>
                    :
                        last-pageNumber == 2 ?
                            <>
                                <div className="clickable square" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>{pageNumber+1}</div>
                                <div className="clickable square" onClick={()=> {moveToPage(last); setPageNumber(last)}}>{last}</div>
                                <div className="clickable forward" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>Вперёд</div>
                            </>
                        :
                            last - pageNumber == 3 ?
                                <>
                                    <div className="clickable square" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>{pageNumber+1}</div>
                                    <div className="clickable square" onClick={()=> {moveToPage(pageNumber+2); setPageNumber(pageNumber+2)}}>{pageNumber+2}</div>
                                    <div className="clickable square" onClick={()=> {moveToPage(last); setPageNumber(last)}}>{last}</div>
                                    <div className="clickable forward" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>Вперёд</div>
                                </>
                            :
                                <>
                                    <div className="clickable square" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>{pageNumber+1}</div>
                                    <div className="clickable square" onClick={()=> {moveToPage(pageNumber+2); setPageNumber(pageNumber+2)}}>{pageNumber+2}</div>
                                    <div className="square">…</div>
                                    <div className="clickable square" onClick={()=> {moveToPage(last); setPageNumber(last)}}>{last}</div>
                                    <div className="clickable forward" onClick={()=> {moveToPage(pageNumber+1); setPageNumber(pageNumber+1)}}>Вперёд</div>
                                </>
                :
                    <div className="unclickable forward">Вперёд</div>
                }
            </div>
            <style jsx>{`
                .mob {
                    align-items: center;
                    border: 2px solid black;
                }
                .mob:hover {
                    transition: all .2s;
                    color: #d92121;
                    cursor: pointer; 
                }
                .pag-box {
                    display: flex;
                    justify-content: center;
                    margin: .5rem;
                    font-size: .7rem;
                    line-height: 1.5rem;
                    font-weight: bold;
                    letter-spacing: .2rem;
                    text-transform: uppercase;
                    vertical-align: middle;
                    text-align: center;
                    height: 3rem;
                }
                .wide-screen {
                    position: absolute;
                    width: 98%;
                    left: 0;
                    visibility: hidden;
                    display: none;
                }
                @media (min-width: 600px) {
                    .pag-background {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                    .mob {
                        position: absolute;
                        visibility: hidden;
                        display: none !important;
                    }
                    .wide-screen {
                        visibility: visible;
                        display: flex;
                    }
                    .pag-box {
                        margin-top: 2rem;
                    }
                    .unclickable {
                        color: gray;
                    }
                    .clickable:hover {
                        transition: all .2s;
                        color: #d92121;
                        cursor: pointer; 
                    }
                    .pag-box div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid gray;
                        border-right: 0;
                    }
                    .square {
                        width: 3rem;
                    }
                    .back {
                        flex-grow: 1;
                    }
                    .forward {
                        flex-grow: 1;
                        border-right: 1px solid gray !important;
                    }
                    @media (min-width: 79rem) {
                        .wide-screen {
                            left: 0;
                            position: relative;
                            width: 75rem;
                        }
                    }
                }
                
            `}</style>
        </div>
    )
}
export default Pagination;