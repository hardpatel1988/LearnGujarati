import React from "react";
import { Link } from "react-router-dom";
import Image from "components/Image";

const HomeBoxes = () => {
    return (
        <section>
            <div className="wrapper">
                <div className="boxes">
                    <div className="boxes__item">
                        <Link to="/alphabets">
                            <img src={Image("box-kakko.jpg")} alt=""/>
                        </Link>                        
                        <div className="boxes__alphabate-char">
                            <img src={Image("girl-with-baloon.png")} alt="" />
                        </div>
                    </div>
                    <div className="boxes__item">
                        <Link to="/"><img src={Image("box-grammer.jpg")} alt=""/></Link>
                    </div>
                    <div className="boxes__item">
                        <Link to="/"><img src={Image("box-something-new.jpg")} alt=""/></Link>
                    </div>
                    <div className="boxes__item">
                        <Link to="/spatrangi">
                            <img src={Image("box-saptrangi.jpg")} alt=""/>
                        </Link>
                    </div>
                    <div className="boxes__item">
                        <Link to="/"><img src={Image("box-parent-teacher.jpg")} alt=""/></Link>
                        <div className="boxes__teacher-char">
                            <img src={Image("teacher.png")} alt="" />
                        </div>
                    </div>
                    <div className="boxes__item">
                        <Link to="/"><img src={Image("box-talking-lib.jpg")} alt=""/></Link>
                    </div>
                    <div className="boxes__item">
                        <Link to="/"><img src={Image("box-word-game.jpg")} alt=""/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBoxes