import React, { useEffect, useState } from "react";
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Ofertasimpresiones from "../components/layout/impresiones/OfertasImpresiones";
import Preciosimpresiones from "../components/layout/impresiones/Preciosimpresiones";
import Serviciosimpresion from "../components/layout/impresiones/Serviciosimpresion";
import ServicioItem from "../components/layout/impresiones/ServicioItem";
import axios from 'axios';


const Impresiones = (props) => {

    const [loading, setLoading] = useState(false);
    const [serviciosImpresion, setServiciosImpresion] = useState([]);

    useEffect( ()=> {
        const cargarServicioImpresion = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setServiciosImpresion(response.data);
            setLoading(false);
        }
        cargarServicioImpresion();
    }, []);    


    return (
        <div> 
            <OfertasFecha/>            
            <Linea/>  
             <h2>Impresiones</h2>
             {/* {loading ? (
                 <div class="spinner-border text-success" role="status">
                 <span class="sr-only">Cargando...</span>
            </div>
             ):(
                serviciosImpresion.map(item=> <ServicioItem key={item.id}
                    title = {item.titulo} subtitle = {item.subtitulo}
                    imagen = {item.imagen} body = {item.cuerpo} />)    
             )} */}
             
            <Ofertasimpresiones/>
            <Preciosimpresiones/>
            <Serviciosimpresion/>
            <Linea/>
            <Beneficios/>
        </div>    )
}

export default Impresiones;