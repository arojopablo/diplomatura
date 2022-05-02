import React, { useEffect, useState } from "react";
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Novedad from "../components/layout/Novedad";
import axios from 'axios';

const Novedades = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedad, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedad = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        }
        cargarNovedad();
    }, []);


    return (
        <div>
            <OfertasFecha />
            <Linea />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="my-5">Novedades</h2>
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            novedad.map(item => <Novedad key={item.id}
                                title={item.titulo} subtitle={item.subtitulo}
                                imagen={item.imagen} body={item.cuerpo} />)
                        )}
                    </div>
                </div>
            </div>  
         
            <Linea />
            <Beneficios />
        </div>)
}

export default Novedades;