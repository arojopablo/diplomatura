import React from "react";

const Novedad = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 my-2">
                    <img src={imagen} className="img-fluid" />
                </div>
                <div className="col-sm-8 my-3">
                    <h2 className="text-center mb-3">{title}</h2>
                    <h4 className="mb-3">{subtitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    <hr />
                </div>
            </div>



        </div>
    )
}

export default Novedad;