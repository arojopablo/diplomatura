import React, { useEffect, useState } from "react"
import '../styles/components/Pages/NosotrosPage.css';
import Beneficios from "../components/Beneficios";
import OfertasFecha from "../components/OfertasFecha";
import Linea from "../components/Linea";
import Card from 'react-bootstrap/Card';
import axios from 'axios';


const Nosotros = (props) => {
       
  
    return (
        <div>
            <OfertasFecha />
            <Linea />
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Numero de cuenta:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form> */}
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
                                <div className="col-md-3 text-center">
                                    <Card style={{ width: '16rem' }}>
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
                                <div className="col-md-3 text-center">
                                    <Card style={{ width: '16rem' }}>
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
                                <div className="col-md-3 text-center">
                                    <Card style={{ width: '16rem' }}>
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
                                <div className="col-md-3 text-center">
                                    <Card style={{ width: '16rem' }}>
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