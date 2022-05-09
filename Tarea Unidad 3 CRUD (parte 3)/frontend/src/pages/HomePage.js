import React, { useEffect, useState } from "react";
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Producto from "../components/layout/Producto";
import OfertasFechaSmall from "../components/OfertasFechaSmall";
import axios from 'axios';

// import productos from "../productos";


const Home = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [idBusqueda, setIdBusqueda] = useState(null);

    useEffect(() => {
        const cargarProductos_todos = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
            // const response = await axios.get(`http://localhost:3000/api/productos`);
            console.log(response.data);
            setProductos(response.data);
            setLoading(false);
        }
        cargarProductos_todos();
    }, []);

    const cargarProductos = async (termino="") => {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`, {
            params: {
                termino
            }
        });
        setProductos(response.data);
        setLoading(false);
    }

    const handleClickBuscar = () => {       
            cargarProductos(idBusqueda);       
    };
  

// console.log(productos);
    // un sub array de productos simulando que es una seleccion de productos destacados       
    const filtered = productos.filter(function(element){
     return element.id_producto <= 3;
       });

        // console.log(filtered);
    // const Home = (props) => {
     
    return (
        <div onSubmit={() => cargarProductos()}>
            <OfertasFecha />
            <Linea />
            <div className="container">
            <div className = "col-sm-12 text-center mb-5">
            <input type="text" className="inputCliente" placeholder="Buscar..." value={idBusqueda} onChange={(e) => setIdBusqueda(e.target.value)}></input>
            <button className="btn btn-success mx-1 p-2" onClick={() => handleClickBuscar()}><i class="fa-solid fa-magnifying-glass"></i> Buscar</button>
            </div>
                <div className="col-md-12">
                    <div className="row justify-content-center my-1">
                        {loading ? (
                           <div class="spinner-border text-success" role="status">
                                <span class="sr-only">Enviando...</span>
                           </div>
                        ) : (
                            productos.map(item => <Producto key={item.id_producto}
                                price={item.precio} name={item.nombre}
                                imagen={item.imagen} description={item.descripcion} observation={item.observaciones} />)
                        )}
                        {/* { productos.map(producto => {                           
                                return <div className='col-md-3 mb-4'>
                                    <Producto producto={producto} />
                        </div>
                        })}                       */}

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-10 promo-img my-3">
                        <img className="img-fluid" src="./images/banner-l.jpg" alt="Card image cap" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-md-12 text-center">
                    <h3>PRODUCTOS DESTACADOS</h3>
                    <div className="row justify-content-center my-4">
                    {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            filtered.map(item => <Producto key={item.id}
                                price={item.precio} name={item.nombre}
                                imagen={item.imagen} description={item.descripcion} observation={item.observaciones} />)
                        )}
                    </div>
                </div>
            </div>
            <OfertasFechaSmall />
            <Beneficios />
            <Linea />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 promo-img my-4">
                        <img className="img-fluid" src="./images/laptops-en-oferta.jpg" alt="Card image cap" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;