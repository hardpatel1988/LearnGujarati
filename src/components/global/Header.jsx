import Image from "components/Image";
import { Link } from "react-router-dom";

const menuOnclickHandler = () => {
    var el = document.getElementsByClassName("menu")[0];
    el.classList.toggle("open");
}

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__content">
                    <div className="logo">
                        <Link to="/"><img src={Image("logo-learn-gujarati.png")} alt="Learn Gujarati" /></Link>
                    </div>
                    <menu className="menu" >
                        <button className="menu__button" onClick={menuOnclickHandler}>
                            <span></span>
                            <span></span>
                            <span></span> 
                        </button>
                        <div className="menu__wrapper">
                            <ul className="menu__list">
                                <li className="menu__item menu__item--active">
                                    <Link to="/">
                                         Home
                                    </Link>                                    
                                </li>
                                <li className="menu__item"><Link to="/">About Us</Link></li>
                                <li className="menu__item"><Link to="/">Privacy </Link></li>
                                <li className="menu__item"><Link to="/">Help</Link></li>
                                <li className="menu__item contact-us">                      
                                <svg id="_Layer_" data-name="&lt;Layer&gt;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 817.22 268.96"><defs></defs><path className="cls-1-contact-us" d="M723.68,923.05l-33.93,223.51c-2.17,14.28,20,26.08,45.9,24.47l734.43-45.62c23.53-1.46,40-13.44,36.19-26.27l-49.52-165.28c-3.2-10.68-19.68-18.64-39.38-19l-651-12.61C744.31,901.81,725.51,911,723.68,923.05Z" transform="translate(-689.61 -902.22)"/></svg>          
                                    <Link to="/">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </menu>
                </div>                
            </div>
        </header>
    )
}

export default Header;