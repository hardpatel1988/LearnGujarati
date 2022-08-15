import Image from "components/Image"

const AlphbetBottom = () => {
    return (
        <section className="garden">
            <div className="tree-left">
                <img src={Image("tree.png")} />
            </div>
            <div className="tree-right">
                <img src={Image("tree.png")} />
            </div>
            <div className="kids">
                <img src={Image("kids.png")} />
            </div>
            <div className="garden-bg"></div>
        </section>
    )
}

export default AlphbetBottom;