import React, { useState } from "react";
import axios from 'axios';
import '../../styles/components/Layout/Footer.css';


const Footer = (props) => {

    const initialForm = {

        email: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
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


    return (<div>
        <footer>
            <div className="container-fluid my-4 bg-gris2">
                <hr />
                <div className="row">
                    <div className="col-sm-4">
                        <ul>
                            <li>
                                <h5>INFORMATICA</h5>
                            </li>
                            <li> <a href="">Computadoras</a> </li>
                            <li> <a href="">PC GAMER</a> </li>
                            <li> <a href="">Notebooks</a> </li>
                            <li> <a href="">All in one</a> </li>
                            <li> <a href="">Cargadores Notebooks</a> </li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul>
                            <li>
                                <h5>FOTOCOPIAS</h5>
                            </li>
                            <li> <a href="">Blanco y negro</a> </li>
                            <li> <a href="">Color</a> </li>
                            <li> <a href="">Anillados</a> </li>
                            <li> <a href="">Plastificados</a> </li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul>
                            <li>
                                <h5>ACCESORIOS CELULARES</h5>
                            </li>
                            <li> <a href="">Cargadores</a> </li>
                            <li> <a href="">Cables</a> </li>
                            <li> <a href="">Auriculares</a> </li>
                            <li> <a href="">Memorias Micro Sd</a> </li>
                            <li> <a href="">Pendrives</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h6>Aprovecha nuestros decuentos, ahorra dinero invierte mejor</h6>
                        <p>Ingresa tu mail y suscribete nuestro News Letters</p>
                    </div>
                </div>
                <div className="row">
                    <form method="post" action="/contacto" onSubmit={handleSubmit}>
                        <div className="col-md-12">

                            <div className="input-group mb-3">

                                <input type="text" class="form-control" placeholder="Ingrese su email " name="email" value={formData.email} onChange={handleChange}
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-success" type="submit" id="button-addon2">Quiero que me
                                    contacten</button>
                            </div>
                        </div>
                    </form>
                    {sending ? <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
            </div>
            <div className="row py-2">
                <div className="col-md-12 text-center">
                    <p>Siguenos en nuestras redes Sociales y aprovecha nuestras promociones exlusivas...</p>
                    <i className="p-1 fa fa-fw fa-brands fa-facebook iconoRedes"></i>
                    <i className="p-1 fa fa-fw fa-brands fa-instagram iconoRedes"></i>
                    <i className="p-1 fa fa-fw fa-brands fa-skype iconoRedes"></i>
                    <i className="p-1 fa fa-fw fa-brands fa-twitter iconoRedes"></i>
                </div>
            </div>
            <div className="d-flex justify-content-center my-2">
                <hr />
            </div>
            <div className="text-center p-2">
                <p>Copy @ Todos los derechos reservados Red Informatica</p>
            </div>
        </footer>

    </div>

    )
}

export default Footer;
