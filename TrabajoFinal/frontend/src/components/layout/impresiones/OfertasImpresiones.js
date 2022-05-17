import React from "react";
import "./ImpComponentes.css";
import Card from 'react-bootstrap/Card';
import Linea from "../../Linea";


const Ofertasimpresiones = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="contenedor">
                        <img className="img-fluid" src="./images/printP.jpg" />
                        <div className="centrado"><p>Tu centro de copiado en el Centro</p></div>
                    </div>
                </div>
            </div>
            <Linea/>
            <div className="container">
                <div className="row my-3 text-center">
                    <div className="col-md-12 text-center">
                        <div className="row">
                            <div className="col-md-5 text-center p-3">
                                <ul>
                                    <li>
                                        <p><strong>Porque te conviene imprimir en papel ecologico? </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque alias voluptate magni quod provident ipsa
                                            error quisquam delectus? Cupiditate corrupti, consectetur animi quia sint maxime in similique ratione voluptates?</p>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque alias voluptate magni quod provident ipsa
                                            error quisquam delectus? Cupiditate corrupti, consectetur animi quia sint maxime in similique ratione voluptates?</p>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque alias voluptate magni quod provident ipsa
                                            error quisquam delectus? Cupiditate corrupti, consectetur animi quia sint maxime in similique ratione voluptates?</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md-5">
                                <img className="img-fluid" src="./images/print1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <Linea/>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Oferta</Card.Title>
                                <Card.Img variant="top" src="./images/blancoynegro.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Impresion Blanco y Negro</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Quiero un presupuesto</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Oferta</Card.Title>
                                <Card.Img variant="top" src="./images/oferta2.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Impresion Blanco y Negro</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Quiero un presupuesto</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Oferta</Card.Title>
                                <Card.Img variant="top" src="./images//oferta3.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Impresion Blanco y Negro</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Quiero un presupuesto</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ofertasimpresiones;