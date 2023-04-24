import "./box.css";

const Box = ({children, title, imageAddress, underlined}) => {
    return(
        <div className="box box-bottom-border">
            <div className="title-box">
                <img src={imageAddress}></img>
                <h3 className="title">{title}</h3>
            </div>
            <div className="info-box">
                {children}
            </div>
        </div>
    )
}

export default Box