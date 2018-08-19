import React from "react"
import { Board } from "./Board";
import "../../css/estilos.css";
import { Aside } from "../componentes_genericos/Aside";

export class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            clases: ""
        }
    }

    render(){
        console.log("body")
        console.log(this.props)
        return(

            <div className="body" >
                <div className="row">
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <Board cambiarvista={this.props.cambiarvista} usuario={this.props.usuario} rut={this.props.rut}/>
                    </div>
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                </div>
            </div>
        );
    }
}