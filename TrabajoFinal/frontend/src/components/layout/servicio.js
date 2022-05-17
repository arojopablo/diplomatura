import React from "react";

const ServicioItem = (props) => {
    // const {title, subtitle, imagen, body} = props;
    const { title, subtitle, imagen } = props;
    console.log(imagen);
    return (
        //     <div className = "">
        //        <h1>{title}</h1> 
        //        <h2>{subtitle}</h2>
        //        <img src = {imagen} />
        //        <div dangerouslySetInnerHTML={{__html: body}}/>
        //        <hr /> 
        // </div>
        <div className="d-flex flex-column col-xs-12 col-sm-6 col-md-4 my-2">
            <p className="servicio p-2">{subtitle}</p>
            <div>
                <img className="img-fluid p-5" src={imagen} alt="" />
            </div>
            <div className="my-2">
                {title}
            </div>
        </div>
    )
}

export default ServicioItem;