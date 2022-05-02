import React from "react";
import Card from 'react-bootstrap/Card';


const Serviciosimpresion = (props) => {
    return (
        <div>            
            <div className="container">
            <h2>Aprovecha nuestros Servicios</h2>
                <div className ="row mt-3">
                    <div className="col-md-3 text-center">                        
                        <Card style={{ width: '17rem' }}>
                            <Card.Body>
                                <Card.Title>Servicio Tecnico</Card.Title>
                                <Card.Img variant="top" src="./images/print7.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Impresoras Tinta/Laser</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Quiero un presupuesto</Card.Link>
                            </Card.Body>
                        </Card>                        
                    </div>
                    <div className="col-md-3 text-center">                        
                        <Card style={{ width: '17rem' }}>
                            <Card.Body>
                                <Card.Title>Aseroramiento</Card.Title>
                                <Card.Img variant="top" src="./images/print4.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Oficinas - particulares</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Quiero un presupuesto</Card.Link>
                            </Card.Body>
                        </Card>                        
                    </div>
                    <div className="col-md-3 text-center">                        
                        <Card style={{ width: '17rem' }}>
                            <Card.Body>
                                <Card.Title>Alquiler fotocopiadoras</Card.Title>
                                <Card.Img variant="top" src="./images/print3.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Oficinas - particulares</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Quiero un presupuesto</Card.Link>
                            </Card.Body>
                        </Card>                        
                    </div>
                    <div className="col-md-3 text-center">                        
                        <Card style={{ width: '19rem' }}>
                            <Card.Body>
                                <Card.Title>Servicio Tecnico</Card.Title>
                                <Card.Img variant="top" src="./images/print7.jpg" />
                                <Card.Subtitle className="mb-2 text-muted">Impresoras Tinta/Laser</Card.Subtitle>
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
        </div>    )
}

export default Serviciosimpresion;