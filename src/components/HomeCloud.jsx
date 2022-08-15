import {React,  useEffect, useRef } from "react";
import Image from "components/Image";
import gsap from "gsap";

const HomeCloud = () => {

    const el = useRef();
    const q = gsap.utils.selector(el);

    useEffect(() => {
        gsap.fromTo("#cloud-1", {x:-1400}, {x:2700, repeat:-1, duration: 100});
        gsap.fromTo("#cloud-2", {x:-4000}, {x:2700, repeat:-1, duration: 130});
        gsap.fromTo("#cloud-3", {x:-5000}, {x:2700, repeat:-1, duration: 120})
        gsap.fromTo("#cloud-4", {x:-4500}, {x:2700, repeat:-1, duration: 110})
        gsap.fromTo("#cloud-5", {x:-300}, {x:1900, repeat:-1, duration: 70})
    }, [])

    return (
        <div className="clouds" ref={el}>            
            <img src={Image("cloud-1.png")} className="cloud" id="cloud-1" alt=""/>
            <img src={Image("cloud-1.png")} className="cloud" id="cloud-2" alt=""/>
            <img src={Image("cloud-1.png")} className="cloud" id="cloud-3" alt=""/>
            <img src={Image("cloud-1.png")} className="cloud" id="cloud-4" alt=""/>
            <img src={Image("cloud-1.png")} className="cloud" id="cloud-5" alt=""/>
        </div>
    )
}

export default HomeCloud;