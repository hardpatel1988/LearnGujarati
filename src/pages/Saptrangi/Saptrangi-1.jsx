import React, {useEffect} from "react";
import LetterOnCloudList from "components/saptrangi/LetterOnCloudList";
import Letters from "Data/saptrangi.json";
import TextBoxWithImage from "components/saptrangi/TextBoxWithImage";
import Abhyas from "components/saptrangi/Abhyas";
import LetterExcersize from "components/saptrangi/LetterExcersize";
import Spacer from "components/global/spacer";

const Saptrangi_1 = () => {

    useEffect(() => {
        document.getElementsByTagName("body")[0].className = 'saptrangiDetail';
        document.title = 'Saptrangi 1';
    }, []);

    const saptrangiX = Letters.Saptrangi_1;
    const Saptrangi =  saptrangiX.CloudWithLetter;
    const Saptrangi_TextBoxWithImage = saptrangiX.textBoxWithImage;
    const Saptrangi_TextBoxWithImage_2 = saptrangiX.textBoxWithImage_2;
    const Saptrangi_abhyas = saptrangiX.saptrangi_abhyas;
    const Saptrangi_lett_LetterExcersize = saptrangiX.LetterExcersize;
    const Saptrangi_TextBoxWithImage_with_bg = saptrangiX.textBoxWithImage_with_bg;

    return (
        <div className="saptrangiDetail__content">   
            <Spacer size=""/>         
            <h1 className="saptrangiDetail__title">સપ્તરંગી ૧</h1>
            <Spacer size=""/>
            <LetterOnCloudList letterList={Saptrangi}/>
            <Spacer size=""/>
            <TextBoxWithImage data={Saptrangi_TextBoxWithImage} />
            <Spacer size=""/>
            <TextBoxWithImage data={Saptrangi_TextBoxWithImage_2} />
            <Abhyas data={Saptrangi_abhyas}/>
            <LetterExcersize data={Saptrangi_lett_LetterExcersize}/>
            <Spacer size=""/>
            <TextBoxWithImage data={Saptrangi_TextBoxWithImage_with_bg} />
        </div>
    )
}

export default Saptrangi_1;