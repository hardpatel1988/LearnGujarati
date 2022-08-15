import React, {useEffect} from "react";
import Image from "components/Image";
import { Link } from "react-router-dom";
import Spacer from "components/global/spacer";

const SaptrangiListing = () => {
    useEffect(() => {
        document.getElementsByTagName("body")[0].className = 'saptrangiDetail';
        document.title = 'Saptrangi';
    }, []);

    return(
        <>
            <div className="SaptrangiListing">
                <div className="wrapper">      
                    <Spacer size=""/> 
                    <h1 className="saptrangiDetail__title">સપ્તરંગી 1111</h1>          
                    <div className="alphabets__bg-top">
                        <img src={Image("alphabets-bg-top.png")} />
                    </div>
                    <div className="alphabets__characters">                   
                        <div className="alphabets__characters-wrapper">
                           <div className="row">
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi-1" className="SaptrangiListing__box">
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>  
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi-2" className="SaptrangiListing__box" >
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>  
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi_1 " className="SaptrangiListing__box">
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>  
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi_1 " className="SaptrangiListing__box">
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>         
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi_1" className="SaptrangiListing__box">
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>  
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi_1" className="SaptrangiListing__box" >
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>  
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi_1 " className="SaptrangiListing__box">
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>  
                                <div className="col-xs-6 col-sm-3 col-md-2">
                                    <Link to="/spatrangi/spatrangi_1 " className="SaptrangiListing__box">
                                        <img src={Image("saptrangi/Saptarangi-1.jpg")} />
                                    </Link>         
                                </div>               
                           </div>
                        </div>
                    </div>
                    <div className="alphabets__bg-bottom">
                        <img src={Image("alphabets-bg-bottom.png")} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaptrangiListing