import React from "react";
const BeneficiosPromo = (props) => {
    return (
        <div className="container my-3">
        <div className="row">
            <div className="col-md-6">
                <img className = "img-fluid"src="./images/laptop-2434393_640.jpg" alt=""/>
            </div>
            <div class="col-md-6 beneficios">
                <h2>
                    PROMOS
                </h2>
                <ul>
                    <li><i className="fa fa-check"></i> Envios a Domicilio</li>
                    <li><i className="fa fa-check"></i>Recibimos Mercado Pago</li>
                    <li><i className="fa fa-check"></i>Descuentos por pago contado</li>
                    <li><i className="fa fa-check"></i>Devolucion gratis 30 dias</li>                    
                </ul>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis labore, dolore veritatis
                    rerum, iusto accusamus reprehenderit, eligendi fugiat ab ad commodi. Facere nulla odit, eos
                    veritatis quasi debitis aut odio.
                </p>
            </div>
        </div>
        </div>        

    )
}

export default BeneficiosPromo;

