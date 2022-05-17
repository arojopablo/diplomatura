import React, { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import '../styles/components/Pages/NosotrosPage.css';
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Card from 'react-bootstrap/Card';
import axios from 'axios';


const Nosotros = (props) => {

    const [loading, setLoading] = useState(false);
    const [opinionWeb, setOpiniones] = useState([]);

    useEffect(() => {
        const cargarOpinion = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/opiniones`);
            console.log("response tiene: ", response);
            setOpiniones(response.data);
            setLoading(false);
        }
        cargarOpinion();
    }, []);

    console.log(opinionWeb);

    const initialForm = {
        opinion: '',
    }


    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/opiniones`, formData);

        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }
    return (
        <div>
            <OfertasFecha />
            <Linea />
            <div>
                <form className="col-md-9 m-auto" method="post" action="/opiniones" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label for="inputname">Que opinas de nosotros?</label>
                            <input type="text" className="form-control mt-1" id="opinion" name="opinion" value={formData.opinion} onChange={handleChange} placeholder="Contanos que pensas de nosotros..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-start mt-2">
                            <button type="submit" class="btn btn-success btn-lg px-3">Cuentanos</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="my-5">

                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-10">
                            <Carousel variant="dark">
                                {loading ? (
                                    <div class="spinner-border text-success" role="status">
                                    <span class="sr-only">Cargando...</span>
                               </div>
                                ) : (
                                    opinionWeb.map(item => <Carousel.Item>
                                        <div className="p-5">
                                            <h4>Usuario Anonimo dijo:</h4>
                                            <p className="opinion">
                                                "{item.notificacion}"
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    )
                                )}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-gris3 ">
                <div className="row">
                    <div class="col-md-12 text-center p-3">
                        <h4>Desde el 1984 junto a Ustedes</h4>
                        <img className="img-fluid" src="./images/staff.jpg" alt="" />
                        <p className="nosotrosTexto"> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda id
                            praesentium molestiae dolores rerum deleniti sapiente non eum nisi? Saepe ratione culpa repellendus
                            doloribus eaque quibusdam voluptatum totam repudiandae ipsa." </p>
                        <p className="nosotrosTexto"> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda id
                            praesentium molestiae dolores rerum deleniti sapiente non eum nisi? Saepe ratione culpa repellendus
                            doloribus eaque quibusdam voluptatum totam repudiandae ipsa.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda id
                            praesentium molestiae dolores rerum deleniti sapiente non eum nisi? Saepe ratione culpa repellendus
                            doloribus eaque quibusdam voluptatum totam repudiandae ipsa." </p>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 p-5" >
                        <div className="container text-center">
                            <h3>Nuestro Personal</h3>
                            <div className="row mt-3">
                                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                                    {/* <Card style={{ width: '16rem' }}> */}
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Maria Lopez</Card.Title>
                                            <Card.Img variant="middle" src="./images/nosotros/nosotros4.jpg" />
                                            <Card.Subtitle className="mt-1 mb-2 text-muted">Asesor Comercial</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Contacta con Maria</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Juan Gomez</Card.Title>
                                            <Card.Img variant="middle" src="./images/nosotros/nosotros1.jpg" />
                                            <Card.Subtitle className="mt-1 mb-2 text-muted">Asesor Comercial</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Contacta con Juan</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Carlos Peña</Card.Title>
                                            <Card.Img variant="middle" src="./images/nosotros/nosotros3.jpg" />
                                            <Card.Subtitle className="mt-1 mb-2 text-muted">Asesor Comercial</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Contacta con Carlos</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Marta Juarez</Card.Title>
                                            <Card.Img variant="middle" src="./images/nosotros/nosotros2.jpg" />
                                            <Card.Subtitle className="mt-1 mb-2 text-muted">Asesor Comercial</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Contacta con Marta</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 text-center p-5 bg-verde p-10 text-white">
                        <p className="tituloNosotros"> Nuestra Historia nos Define </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, atque maiores. Voluptates,
                            minus.
                            Praesentium, deserunt adipisci eius rem tenetur accusantium minus consequuntur dolor quos voluptate,
                            numquam delectus obcaecati autem! Voluptatum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, atque maiores. Voluptates,
                            minus.
                            Praesentium, deserunt adipisci eius rem tenetur accusantium minus consequuntur dolor quos voluptate,
                            numquam delectus obcaecati autem! Voluptatum!
                        </p>

                    </div>
                    <div className="col-md-6 text-center p-5 bg-verde p-10 text-white">
                        <img src="./images/nosotros1.jpg" alt="" />

                    </div>
                </div>
            </div>
            <Linea />
            <Beneficios />
        </div>)
}

export default Nosotros;