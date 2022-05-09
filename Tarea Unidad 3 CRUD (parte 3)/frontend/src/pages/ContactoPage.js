import React, { useState } from "react";
import axios from 'axios';
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import OfertaFechaSmall from "../components/OfertasFechaSmall";


const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value // forma dinamica

        }));  
    } 

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        } 
    }

    return (
        <div>
            <OfertasFecha />
            <Linea />
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contactanos</h1>
                    <p>
                        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" action="/contacto" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputname">Nombre</label>
                                <input type="text" className="form-control mt-1" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputemail">Correo Electronico</label>
                                <input type="email" class="form-control mt-1" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="inputsubject">Telefono</label>
                            <input type="text" class="form-control mt-1" id="subject" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Telefono" />
                        </div>
                        <div className="mb-3">
                            <label for="inputmessage">Comentario</label>
                            <textarea className="form-control mt-1" id="message" name="mensaje" placeholder="Mensaje" rows="8" value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" class="btn btn-success btn-lg px-3">Hablemos</button>
                            </div>
                        </div>
                    </form>
                    {sending ? <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Enviando...</span>
                    </div>  : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
            </div>
            <OfertaFechaSmall />

            <Beneficios />
        </div>
    )
}

export default Contacto;
