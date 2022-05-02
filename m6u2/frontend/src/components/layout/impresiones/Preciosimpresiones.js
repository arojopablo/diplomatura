import React from "react";
import Table from 'react-bootstrap/Table';

const Preciosimpresiones = (props) => {
    return (
        <div>
            <div className="container my-5">                
                <div className="row">
                    <div className="col-md-10 text-center">
                    <h2>Precios de Nuestras Fotocopias/impresiones</h2>
                    <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Impresion Blanco y Negro </th>
                        <th>Color</th>
                        <th>Color fotografico</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>$10</td>
                        <td>$30</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>+50</td>
                        <td>$5</td>
                        <td>$10</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>+100</td>
                        <td>$4</td>
                        <td>$8</td>
                        <td>$45</td>
                    </tr>
                </tbody>
            </Table>
                    </div>
                </div>
            </div>
            
        </div>)
}

export default Preciosimpresiones;