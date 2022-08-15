import {React,  useEffect, useRef } from "react";
import Image from "components/Image";
import gsap from "gsap";

const AlphabetCloud = () => {

    const el = useRef();
    const q = gsap.utils.selector(el);

    function cloudAnimation() {
        gsap.fromTo(q("#cloud-1"), {x:-1400}, {x:2700, repeat:-1, duration: 100});
        gsap.fromTo(q("#cloud-2"), {x:-4000}, {x:2700, repeat:-1, duration: 130});
        gsap.fromTo(q("#cloud-3"), {x:-5000}, {x:2700, repeat:-1, duration: 120});
        gsap.fromTo(q("#cloud-4"), {x:-4500}, {x:2700, repeat:-1, duration: 110});
        gsap.fromTo(q("#cloud-5"), {x:-300}, {x:1900, repeat:-1, duration: 70});
    }

    useEffect(() => {
        cloudAnimation();
    }, [])

    return (
        <div className="clouds" ref={el}>            
            <img src={Image("cloud-2.png")} className="cloud" id="cloud-1" alt=""/>
            <img src={Image("cloud-2.png")} className="cloud" id="cloud-2" alt=""/>
            <img src={Image("cloud-2.png")} className="cloud" id="cloud-3" alt=""/>
            <img src={Image("cloud-2.png")} className="cloud" id="cloud-4" alt=""/>
            <img src={Image("cloud-2.png")} className="cloud" id="cloud-5" alt=""/>
        </div>
    )
}

export default AlphabetCloud;