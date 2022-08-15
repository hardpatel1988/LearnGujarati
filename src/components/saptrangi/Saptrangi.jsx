import React from "react";
import Image from "components/Image";

export const LetterOnCloud = (prop) => {

    return (
        <>
            <div className="LetterOnCloud">
                <div className="LetterOnCloud__cloud">
                    <img src={Image("saptrangi/cloud.svg")} />
                    <img className="LetterOnCloud__object" src={Image(`saptrangi/${prop.objectImg}`)}  /> 
                </div>                
                <img className="LetterOnCloud__basket" src={Image(`saptrangi/letterBasket-${prop.color}.svg`)} />
                <span className={`LetterOnCloud__letter LetterOnCloud__letter--${prop.color}`}>{prop.letter}</span>
            </div>
        </>
    )
}

export const SaptrangiTextBox = (prop) => {
    const title = prop.data.title;
    const para =  prop.data.para;
    let color = "";
    const img = prop.data.img;

    if( prop.data.color != undefined){
        color = `SaptrangiTextBox--${color}`;
    }

    const Getimage = () => {
        if (img != undefined){
            return(
                <img src={Image(`saptrangi/${img}`)} />
            )
        }
    }

    return (
        <div className={`SaptrangiTextBox `}>    
            <div className="SaptrangiTextBox__text">
                <h2 className="SaptrangiTextBox__title">{title}</h2>
                {
                    para.map(para => {
                        return <p key={para.id}>{para.text}</p>
                    })
                }
            </div>
            <div className="SaptrangiTextBox__img">
                <Getimage/>
            </div>            
        </div>
    )
}
