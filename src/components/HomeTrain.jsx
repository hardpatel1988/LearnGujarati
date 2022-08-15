import {React,  useEffect } from "react";
import gsap from "gsap";
import Image from "components/Image";

const HomeTrain = () => {

    useEffect(() => {
        const headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
        const winHeight = window.innerHeight;
        const animationTopOfset = winHeight - headerHeight;
        const t1 = gsap.timeline({ repeat: -1 , repeatDelay: 1});   

        t1.to(".parasuite", { y: - animationTopOfset, scale: 0.7, duration: 80 })
        t1.to(".parasuite", { y: 0 + "%", scale: 1,  delay: 1, duration: 80 } )
    }, [])

    return (
        <section className="train">
            <div className="train__bg"></div>
            <div className="parasuite">
                <img src={Image("parasuite.png")} alt="" />
            </div>
            <div className="train__signal"><img src={Image("footer-signal.png")} alt="" /></div>  
            <div className="train__image"></div>                      
        </section>
    )
}

export default HomeTrain;