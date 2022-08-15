
import React, {useEffect} from "react";
import AlphabetLetters from "components/AlphabetLetters";
import AlphbetBottom from "components/AlphbetBottom";

const Alphabets = () => {

    useEffect(() => {
        document.getElementsByTagName("body")[0].className = 'page-alphabets';
        document.title = 'Alphabets';
    }, []);

    return(
        <>
            <div>
                <AlphabetLetters/>
                <AlphbetBottom/>
            </div>
        </>
    )
}

export default Alphabets