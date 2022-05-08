import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import '../styles/components/Pages/AdminPage.css';

const Admin = (props) => {

    const [loading, setLoading] = useState(false);
    const [operaciones, setOperaciones] = useState([]);
    const [idCliente, setIdCliente] = useState(null);

    // este default se puede eliminar
    const cargarOperaciones = async (id=1) => {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/operaciones`, {
            params: {
                id
            }
        });
        setOperaciones(response.data);
        setLoading(false);
    }

    const handleClickBuscar = () => {
        // validar que sea un numero
        if (idCliente) {
            cargarOperaciones(idCliente);
        }
    };

    return (        
        <div className="container my-5">
            <div className = "col-sm-12 text-center mb-5 bg-gris2 p-2">
                <div className="row text-start">
                    <div className="col-sm-12 p-1 ms-3"><h5><i class="fa-regular fa-1x fa-file"></i> Busque sus operaciones</h5></div>
                </div>
             </div>
            <div className = "col-sm-12 text-center mb-5">
            <input type="text" className="inputCliente" placeholder="Ingrese su numero de cliente" value={idCliente} onChange={(e) => setIdCliente(e.target.value)}></input>
            <button className="btn btn-success mx-1 p-2" onClick={() => handleClickBuscar()}><i class="fa-solid fa-magnifying-glass"></i> Buscar</button>
            </div>
            {loading ? (
                    <p>Cargando...</p>
                ) : (
                    operaciones.map(item => 
            <article className="card my-2">
                <header className="card-header"> Mis Operaciones / Tracking </header>
                <div className="card-body">     
                    <h6>Cliente ID: {item.id_cliente} / {item.cliente_apellido}, {item.cliente_nombre}</h6>
                    <article className="card">
                        <div className="card-body row">
                            <div className="col"> <strong>Fecha estimada entrega:</strong> <br />16 de Mayo de 2022 </div>
                            <div className="col"> <strong>Fecha Venta:</strong> <br />{item.venta_fecha}</div>
                            <div className="col"> <strong>Atendido por:</strong> <br />     XXXXXXXX, | <i class="fa fa-phone"></i> +2664372195 </div>
                            <div className="col"> <strong>Status:</strong> <br /><p id = {item.venta_estado}> {item.venta_estado} </p></div>
                            <div className="col"> <strong>Numero de seguimiento #:</strong> <br /> BD045903594059 </div>
                        </div>
                    </article>
                    <div class="track">
                        <div className="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Operacion recibida</span> </div>
                        <div className="step active"> <span class="icon"> <i class="fa fa-user"></i> </span> <span class="text"> En Proceso</span> </div>
                        <div className="step" id={item.venta_estado+"1"}> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> En camino </span> </div>
                        <div className="step" id={item.venta_estado+"1"}> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Listo para entregar</span> </div>
                    </div>
                    <hr />
                        <ul className="row">
                            <li className="col-md-4">
                                <figure className="itemside mb-3">
                                    <div className="aside"><img src="https://res.cloudinary.com/redinformatica/image/upload/v1651108661/odjzg3dul2ivm5qm7fhc.png" class="img-sm border" /></div>
                                    <figcaption className="info align-self-center">
                                        <p className="title">{item.producto_nombre} <br /> Observaciones del producto</p> <span class="text-muted">$950 </span>
                                    </figcaption>
                                </figure>
                            </li>                           
                        </ul>
                        <hr /> 
                       
                        </div>
                 </article>)
                )}
                
        </div>

    );
}

export default Admin;
