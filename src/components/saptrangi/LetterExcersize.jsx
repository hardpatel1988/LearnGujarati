import React, {useEffect} from "react";
import Image from "components/Image";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import $ from "jquery"
import tile from "components/DragAndDropFunc";


const LetterExcersize = (prop) => {
    const Title = () => {
        if(prop.data.title){
            return(
                <h2 className="LetterExcersize__title">{prop.data.title}</h2>
            )
        }
    }
    const exrsize = prop.data.excersize;
    //const q = gsap.utils.selector(el);
    gsap.registerPlugin(Draggable);

    useEffect(() => {
         exrsize.map((ex) => {
            tile(ex.tileConfig);
        })
    }, [])

    return (
        <>
             <div className="LetterExcersize">
                <div className="wrapper">    
                    <Title/> 
                    <div className="LetterExcersize__wrapper">
                        <div className="LetterExcersize__letters">
                            {
                                exrsize.map((l) => {
                                    let opts = {};
                                    opts[`${l.tileConfig.dropzone}`] = 'main';
                                    return (
                                        <section key={l.id} {...opts} data-sorted="true">
                                            <div id={l.tileConfig.clone} className={l.tileConfig.clone}>
                                                <div id="tile-container" className={l.tileConfig.letter}>
                                                    <div className="tile-wrapper">
                                                        <div className={l.tileConfig.tiles}>{l.letter}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    )
                                })
                            }
                        </div>
                        <div className="row">
                        {
                            exrsize.map((e) => {
                                let opts = {};
                                opts[`${e.tileConfig_drop.dropzone}`] = 'center';
                                return(
                                    <div  key={`${e.id}_1`} className="col-xs-6 col-sm-3 col-md-3">
                                        <div className="LetterExcersize__image-box">
                                            <div className="LetterExcersize__image">
                                                <img src={Image(`saptrangi/${e.img}`)} />
                                            </div>
                                            <div className={`LetterExcersize__box LetterExcersize__box--blue`} >
                                                <div {...opts}>
                                                    <div className={e.tileConfig_drop.clone}>
                                                        <div className={e.tileConfig_drop.letter}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )                                
                            })
                        }
                        </div>
                    </div>               
                    
                    
                </div>
            </div> 
        </>
    )
}

export default LetterExcersize