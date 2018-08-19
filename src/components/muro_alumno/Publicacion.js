import React from "react";

export class Publicacion extends React.Component {

    constructor(){
        super();
        this.vista = "";
    }

    BuildPublicacion(){
        var vista = null;

        if(this.props.publicacion == "null"){
            vista = <p>Cargando...</p>
        }else{
            vista = <div>
                <div className="row">
                    <div className="col-md 12">
                        <h6><a href="#">{this.props.publicacion.titulo}</a></h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 12">
                        <h6>{this.props.publicacion.materia}</h6>
                    </div>
                </div>
            </div>
        }

        return vista;
    }

    render(){
        console.log(this.props);
        return(
            this.BuildPublicacion()
        );
    }
}