import Image from "components/Image";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Help</Link>
            </div>
            <div className="footer__copyright">
                <p>Power by<Link to="/"><img src={Image("edusatva-footer-logo.png")} alt="" /></Link></p>
            </div>
        </footer>
    )
}

export default Footer