import React, {useEffect} from "react";
import HomeBoxes from "components/HomeBoxes";
import HomeTrain from 'components/HomeTrain';

const Home = () => {
    useEffect(() => {
        document.getElementsByTagName("body")[0].className = 'page-home';
        document.title = 'Home';
    }, []);

    return(
        <>
            <HomeBoxes/>
            <HomeTrain/>
        </>
    )
}

export default Home