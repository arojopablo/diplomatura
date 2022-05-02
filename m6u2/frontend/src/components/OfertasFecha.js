import React, { useEffect, useState } from "react";
const axios = require('axios').default;

const OfertaFecha = (props) => {

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
        
        if (element.tipo == 'principal') 
        {titulo = element.titulo
        cuerpo = element.cuerpo}
        return {titulo, cuerpo}
          });

// console.log(titulo);          

    return (
        <div class="container col-sm-12 my-3">
            <div class="row">                
                <div class="col-sm-6">               
                    <h1>{titulo}</h1>
                </div>
                <div class="col-sm-6 mt-2">
                    <h3> {cuerpo}</h3>
                </div>
            </div>

        </div>)
}

export default OfertaFecha;