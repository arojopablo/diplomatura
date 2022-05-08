import React from "react";
import Card from 'react-bootstrap/Card';
import '../../styles/components/Layout/producto.css';



// export default function Producto({producto}) {   
//     console.log(producto);
const Producto = (props) => {
    let {imagen, name, price, description ,observation} = props;
    // if (imagen == '') {imagen = "https://res.cloudinary.com/redinformatica/image/upload/v1651108661/odjzg3dul2ivm5qm7fhc.png"}
    if (imagen == '') {imagen = "https://as2.ftcdn.net/v2/jpg/00/35/60/57/1000_F_35605714_q3vtD3pB6TShEkNErwlEfaot2VOwLsV2.jpg"}

    return (
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center'>
        {/* <div className='col-md-3 mb-4'>  */} 
            {/* <Card style={{ width: '18em' }}> */}
            <Card>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title> {name} </Card.Title>
                        <Card.Text>                            
                            <p>"Todos nuestros productos tienen garantia"</p>
                            <p>Descripcion:     {description}</p>
                        </Card.Text>
                        <div className="d-flex flex-column">
                            <div>
                                <div className="izquierda">
                                    <strong>{price}</strong>
                                </div>
                                <div className="derecha">
                                    <li class="derecha"><i class="fa fa-fw fa-cart-plus fa-lg" ></i></li>
                                </div>
                            </div>
                            <div className="observacion text-center my-2">
                                {observation} 
                            </div>
                            <div className="my-2">
                                <hr />
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>
                                <i className="p-1 fa fa-fw fa-brands fa-solid fa-star iconoProducto"></i>

                            
                            </div>
                        </div>
                    </Card.Body>
                </Card>
      
    </div>
    )
    
}

export default Producto;