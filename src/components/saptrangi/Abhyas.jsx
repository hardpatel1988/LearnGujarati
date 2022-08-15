import Image from "components/Image";

const Abhyas = (prop) => {
    
    const title = prop.data.title;
    const box = prop.data.box;

    return (
        <>
            <div className="Saptrangi-abhyas__bg">
                <img src={Image("saptrangi/abhyas-top-bg.png")} />
            </div>
            <div className="Saptrangi-abhyas">
                <div className="Saptrangi-abhyas__cd-game">
                    <img src={Image("saptrangi/cd-game.svg")} />
                </div> 
                <div className="wrapper">
                    <div className="Saptrangi-abhyas__boy-with-pencil">
                        <img src={Image("saptrangi/boy-with-pencil.svg")} />
                    </div> 
                    <h2 className="Saptrangi-abhyas__title">{title}</h2>
                    <div className="row">
                        {
                            box.map(box => {
                                return (
                                    <div key={box.id} className="col-xs-6 col-sm-4">
                                        <div className={`Saptrangi-abhyas__box Saptrangi-abhyas__box--${box.color}`}>
                                            <span>{box.text}</span>
                                        </div>
                                    </div>
                                )                            
                            })
                        }
                    </div>
                </div>     
                      
            </div>
            <div className="Saptrangi-abhyas__bg Saptrangi-abhyas__bg--bottom">
                <img src={Image("saptrangi/abhyas-botom-bg.png")} />
            </div>
        </>        
    )
}

export default Abhyas;