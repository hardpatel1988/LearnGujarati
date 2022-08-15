import React from "react";
import { LetterOnCloud } from "components/saptrangi/Saptrangi";

const LetterOnCloudList = (prop) => {

    return (
        <div className="wrapper">
            <div className="LetterOnCloudList">
                {
                    prop.letterList.map(l => {
                        return <LetterOnCloud key={l.id} color={l.color} letter={l.letter} objectImg={l.objectImg}/>
                    })
                }            
            </div>
         </div>
        
    )
}

export default LetterOnCloudList;