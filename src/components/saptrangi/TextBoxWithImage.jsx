import Image from "components/Image";
import { SaptrangiTextBox } from "components/saptrangi/Saptrangi";

const TextBoxWithImage = (prop) => {

    const image = prop.data.image;
    const TextBoxAlignement = prop.data.textBox_alignment;
    const hasBackgroiund = prop.data.hasBackgroiund;
    let imageWidth = "";

    if(prop.data.imageWdith != undefined){
        imageWidth = `TextBoxWithImage__img--${prop.data.imageWdith}`;
    }

    const TextBoxWithImage_HTML = () => {
        return(
            <div className="wrapper">
                <div className={`TextBoxWithImage TextBoxWithImage--${TextBoxAlignement}`}>
                    <div className={`TextBoxWithImage__img ${imageWidth}`}>
                        <img src={Image(`saptrangi/${image}`)} />
                    </div>
                    <div className="TextBoxWithImage__text">
                        <SaptrangiTextBox data={prop.data.TextBox}/>
                    </div>
                </div>
            </div>  
        )
        
    }

    if(hasBackgroiund) {
        let bgclass = prop.data.backgroiund_class;

        if(bgclass != "undefined"){
            bgclass = ""
        }

        return(
            <div className={`TextBoxWithImage__bg ${bgclass}`}>
                <TextBoxWithImage_HTML/>
            </div>
            
        )
    }else {
        return(
            <TextBoxWithImage_HTML/>
        )
    }
   
}

export default TextBoxWithImage;