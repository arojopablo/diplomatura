import React, { useEffect, useState } from "react";
const axios = require('axios').default;

const OfertasFechaSmall = (props) => {

    const [loading, setLoading] = useState(false);
    const [oferta, setOferta] = useState([]);

    useEffect(() => {
        const cargarOferta = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/ofertas');
            setOferta(response.data);
            setLoading(false);
        }
        cargarOferta();
    }, []);

    var titulo = "";
    var cuerpo = "";
    const filtered = oferta.filter(function(element){
        
        if (element.tipo == 'secundaria') 
        {
        cuerpo = element.cuerpo
        }
        return {cuerpo}
          });
    return (
        <div className="container my-3 p-1">
            <div className="row">
                <div className="col-sm-12 promo">
                    {cuerpo}  
                </div>
            </div>
        </div>)
}

export default OfertasFechaSmall;