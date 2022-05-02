import React from "react";

const ServicioItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return (
        // <div className = "">
        //        <h1>{title}</h1> 
        //        <h2>{subtitle}</h2>
        //        <img src = {imagen} />
        //        <div dangerouslySetInnerHTML={{__html: body}}/>
        //        <hr /> 
        // </div>
        <p>Servicios de impresion dinamicos</p>
    )       
 }

export default ServicioItem;