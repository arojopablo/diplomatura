import React, { useEffect, useState } from "react"
import '../styles/components/Pages/servicios.css';
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import BeneficiosPromo from "../components/Beneficios";
import OfertasFechaSmall from "../components/OfertasFechaSmall";
import Servicio from "../components/layout/servicio";
import axios from 'axios';


const Servicios = (props) => {

    const [loading, setLoading] = useState(false);
    const [serviciosInformatica, setServiciosInformatica] = useState([]);

    useEffect(() => {
        const cargarServicioInformatica = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/servicios`);
            setServiciosInformatica(response.data);
            setLoading(false);
        }
        cargarServicioInformatica();
    }, []);

    return (
        <div>
            <OfertasFecha />
            <Linea />
            <div className="container col-sm-12 my-3 text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Disfruta de Nuestros Servicios</h1>
                    </div>
                </div>
            </div>          
            <section>
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            serviciosInformatica.map(item => <Servicio key={item.id_servicio}
                                title={item.titulo} subtitle={item.servicio}
                                imagen={item.imagen} />)
                        )}
                        {/* <div className="d-flex flex-column col-sm-4 my-2">
                            <p className="servicio p-2">Servicio Tecnico de Pc</p>
                            <div>
                                <img className="img-fluid" src="./images/muñeco2.jpg" alt="" />
                            </div>
                            <div className="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam
                                iusto
                                veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis
                                placeat!
                                Vero dolorum necessitatibus saepe laudantium!
                            </div>
                        </div> */}
                        {/* <div className="d-flex flex-column col-sm-4 my-2 ">
                            <p className="servicio p-2 ">Formateo con resguardo de datos</p>
                            <div>
                                <img className="img-fluid" src="./images/muñeco3.jpg" alt="" />
                            </div>
                            <div className="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam
                                iusto
                                veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis
                                placeat!
                                Vero dolorum necessitatibus saepe laudantium!
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4 my-2 ">
                            <p className="servicio p-2">Actualizacion de Software</p>
                            <div>
                                <img className="img-fluid" src="./images/muñeco4.jpg" alt="" />
                            </div>
                            <div className="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam
                                iusto
                                veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis
                                placeat!
                                Vero dolorum necessitatibus saepe laudantium!
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4 my-2">
                            <p className="servicio p-2">Soporte Remoto</p>
                            <div>
                                <img className="img-fluid" src="./images/office-820390_640.jpg" alt="" />
                            </div>
                            <div className="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam
                                iusto
                                veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis
                                placeat!
                                Vero dolorum necessitatibus saepe laudantium!
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4 my-2 ">
                            <p className="servicio p-2">Actualizacion de Antivirus</p>
                            <div>
                                <img className="img-fluid" src="./images/muñeco1.jpg" alt="" />
                            </div>
                            <div className="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam
                                iusto
                                veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis
                                placeat!
                                Vero dolorum necessitatibus saepe laudantium!
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4 my-2">
                            <p className="servicio p-2">Servicio Tecnico a oficinas</p>
                            <div>
                                <img className="img-fluid" src="./images/laptop-2434393_640.jpg" alt="" />
                            </div>
                            <div className="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam
                                iusto
                                veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis
                                placeat!
                                Vero dolorum necessitatibus saepe laudantium!
                            </div>
                        </div> */}
                    </div>
                </div>

                <OfertasFechaSmall />

                <div class="container-fluid bg-gris2 p-3">
                    <div class="container my-2 serviciosAdicionales bg-white">
                        <div className="container my-2">
                            <div className="row">
                                <div className="col-md-6 my-2">
                                    <p className="servicio p-2">Desarrollo de Paginas WEB</p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam quidem aliquam est
                                    laborum,
                                    quia officia perspiciatis velit architecto pariatur, esse harum, porro suscipit ab libero
                                    doloremque consectetur voluptatibus vel.
                                </div>
                                <div className="col-md-6 my-2">
                                    <img className="img-fluid" src="./images/Soft1.jpg" alt="" />
                                </div>

                                <div className="col-md-6 my-2">
                                    <img className="img-fluid" src="./images/mkt1.jpg" alt="" />

                                </div>
                                <div className="col-md-6 my-2">
                                    <p className="servicio p-2">Marketin Digital</p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam quidem aliquam est
                                    laborum,
                                    quia officia perspiciatis velit architecto pariatur, esse harum, porro suscipit ab libero
                                    doloremque consectetur voluptatibus vel.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OfertasFechaSmall />
            <BeneficiosPromo />
        </div>

    )
}

export default Servicios