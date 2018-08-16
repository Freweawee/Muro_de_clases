import React from "react"
import "../../css/RegistrarCurso.css";
import { PresentationCard } from "./PresentationCard";
import { AsideLeft } from "./AsideLeft";

export class Body extends React.Component {

    render(){
        return(
            <div className="body">
                <div className="row">
                    <div className="col-md-3">
                        <AsideLeft/>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <PresentationCard usuario={this.props.usuario} rut={this.props.rut} idclase={this.props.idclase}/>
                    </div>
                    <div className="col-md-3">
                        <AsideLeft/>
                    </div>
                </div>
            </div>
        );
    }
}