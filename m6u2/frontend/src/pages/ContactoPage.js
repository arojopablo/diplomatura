import React from "react";
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import OfertaFechaSmall from "../components/OfertasFechaSmall";

const Contacto = (props) => {
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
                    <form className="col-md-9 m-auto" method="post" role="form">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputname">Nombre</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Nombre  " />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputemail">Correo Electronico</label>
                                <input type="email" class="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="inputsubject">Asunto</label>
                            <input type="text" class="form-control mt-1" id="subject" name="subject" placeholder="Asunto" />
                        </div>
                        <div className="mb-3">
                            <label for="inputmessage">Mensaje</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Mensaje" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" class="btn btn-success btn-lg px-3">Hablemos</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <OfertaFechaSmall />

            <Beneficios />
        </div>
    )
}

export default Contacto;
