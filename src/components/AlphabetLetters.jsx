import {React,  useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Image from "components/Image";
import gsap from "gsap";

const AlphabetLetters = () => {

    function parasuitInfintyMoveAlphabets_1(){ 
        let winHeight = document.getElementsByClassName("alphabets__characters")[0].offsetHeight + 200;
        let animationTopOfset = winHeight;
        const t1 = gsap.timeline({ repeat: -1 , repeatDelay: 1}); 

        t1.to(".parasuite-alphabets-1", { ease: "none",  y: animationTopOfset, scale: 1,  duration: 90 });
        t1.to(".parasuite-alphabets-1", { ease: "none", y: 0 + "%", scale: 1,  delay: 1,  duration: 90 } );
    }

    function parasuitInfintyMoveAlphabets_2(){   
        let winHeight = document.getElementsByClassName("main")[0].offsetHeight;
        let animationTopOfset = winHeight;
        const t1 = gsap.timeline({ repeat: -1 , repeatDelay: 1}); 

        t1.set(".parasuite-alphabets-2", { y: animationTopOfset / 2 })
        t1.to(".parasuite-alphabets-2",  { ease: "none",  y: animationTopOfset, scale: 1,  duration: 150 });
        t1.to(".parasuite-alphabets-2",  { ease: "none", y: 0 + "%", scale: 1,  delay: 1,  duration: 150 } );
    }

    useEffect(() => {
        parasuitInfintyMoveAlphabets_1();
        parasuitInfintyMoveAlphabets_2();
    }, [])

    return (
        <section className="main">
        <div className="parasuite-alphabets-2">
            <img src={Image("parasuite-blue.svg")} alt="" />
        </div>
        <div className="wrapper">
            <div className="text-center">
                <div className="page-heading">
                    <img className="page-heading__rainbow" src={Image("rainbow.svg")} />
                    <img className="page-heading__image" src={Image("title-mulakshar.png")} title="Mulakshar" />
                    <h2 className="page-heading__title">વ્યંજન</h2>
                </div>
            </div>
        </div>
        <div className="alphabets">
            <div className="parasuite-alphabets-1">
                <img src={Image("parasuite-yellow.svg")} alt="" />
            </div>
            <div className="girl-with-rope">
                <img className="rope" src={Image("girl-with-rope.svg")} />
            </div>
            <div className="alphabets__bg-top">
                <img src={Image("alphabets-bg-top.png")} />
            </div>
            <div className="alphabets__characters">
                <div className="girl-with-book">
                    <img src={Image("girl-with-book.svg")} />
                </div>
                <div className="globe">
                    <img src={Image("globe.svg")} />
                </div>
                <div className="alphabets__characters-wrapper">
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">ક</span>
                        <span className="english">Ka</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-green">
                        <span className="gujarati">ખ</span>
                        <span className="english">Kha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-yellow">
                        <span className="gujarati">ગ</span>
                        <span className="english">Ga</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-gray">
                        <span className="gujarati">ઘ</span>
                        <span className="english">Gha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-blue">
                        <span className="gujarati">ચ</span>
                        <span className="english">Cha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">છ</span>
                        <span className="english">Chha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-parrot-green">
                        <span className="gujarati">જ</span>
                        <span className="english">Ja</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">ઝ</span>
                        <span className="english">Jha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-pink">
                        <span className="gujarati">ટ</span>
                        <span className="english">Ta</span>
                    </Link>
    
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">ઠ</span>
                        <span className="english">Tha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-green">
                        <span className="gujarati">ડ</span>
                        <span className="english">Da</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-yellow">
                        <span className="gujarati">ઢ</span>
                        <span className="english">Dha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-gray">
                        <span className="gujarati">ણ</span>
                        <span className="english">Na</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-blue">
                        <span className="gujarati">ત</span>
                        <span className="english">Ta</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-sky-blue">
                        <span className="gujarati">થ</span>
                        <span className="english">Tha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">દ</span>
                        <span className="english">Da</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-pink">
                        <span className="gujarati">ધ</span>
                        <span className="english">Dha</span>
                    </Link>
    
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">ન</span>
                        <span className="english">na</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items  text-green">
                        <span className="gujarati">પ</span>
                        <span className="english">Pa</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-yellow">
                        <span className="gujarati">ઝ</span>
                        <span className="english">Jha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-gray">
                        <span className="gujarati">ફ</span>
                        <span className="english">Fa</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-blue">
                        <span className="gujarati">બ</span>
                        <span className="english">Ba</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items  text-sky-blue">
                        <span className="gujarati">ભ</span>
                        <span className="english">Bha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">મ</span>
                        <span className="english">Ma</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-pink">
                        <span className="gujarati">ય</span>
                        <span className="english">Ya</span>
                    </Link>
    
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">ર</span>
                        <span className="english">Ra</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-green">
                        <span className="gujarati">લ</span>
                        <span className="english">La</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-yellow">
                        <span className="gujarati">વ</span>
                        <span className="english">Va</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-gray">
                        <span className="gujarati">શ</span>
                        <span className="english">Sha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-blue">
                        <span className="gujarati">ષ</span>
                        <span className="english">Sha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-sky-blue">
                        <span className="gujarati">સ</span>
                        <span className="english">Sa</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">હ</span>
                        <span className="english">Ha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-pink">
                        <span className="gujarati">ળ</span>
                        <span className="english">La</span>
                    </Link>
    
                    <Link to="/alphabets" className="alphabets__items  text-violet">
                        <span className="gujarati">ક્ષ</span>
                        <span className="english">Ksha</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-green">
                        <span className="gujarati">જ્ઞ</span>
                        <span className="english">Gna</span>
                    </Link>
                </div>
            </div>
            <div className="alphabets__bg-bottom">
                <img src={Image("alphabets-bg-bottom.png")} />
            </div>
        </div>

        <div className="alphabets alphabets--vovel">
            <div className="vovel-title">
                <img src={Image("title-vovel.png")} />
            </div>
            <div className="alphabets__bg-top">
                <img src={Image("alphabets-bg-top.png")} />
            </div>
            <div className="alphabets__characters">
                <div className="alphabets__characters-wrapper">
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">અ</span>
                        <span className="english">a</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-green">
                        <span className="gujarati">આ</span>
                        <span className="english">A</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-yellow">
                        <span className="gujarati">ઇ</span>
                        <span className="english">i</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-gray">
                        <span className="gujarati">ઈ</span>
                        <span className="english">I</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-blue">
                        <span className="gujarati">ઉ</span>
                        <span className="english">u</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-sky-blue">
                        <span className="gujarati">ઊ</span>
                        <span className="english">U</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">એ</span>
                        <span className="english">e</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-parrot-green">
                        <span className="gujarati">ઐ</span>
                        <span className="english">Ai</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-red">
                        <span className="gujarati">ઓ</span>
                        <span className="english">o</span>
                    </Link>
                    <Link to="/alphabets" className="alphabets__items text-pink">
                        <span className="gujarati">ઔ</span>
                        <span className="english">au</span>
                    </Link>    
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">અં</span>
                        <span className="english">aM</span>
                    </Link>    
                    <Link to="/alphabets" className="alphabets__items text-violet">
                        <span className="gujarati">અઃ</span>
                        <span className="english">aH</span>
                    </Link>                 
                </div>
            </div>
            <div className="alphabets__bg-bottom">
                <img src={Image("alphabets-bg-bottom.png")} />
            </div>
        </div>
    </section>
    )
}

export default AlphabetLetters;