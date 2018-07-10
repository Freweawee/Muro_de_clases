import React from "react"
import { Board } from "./Board";
import "../css/estilos.css";
import { AsideLeft } from "./AsideLeft";

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
                        <AsideLeft/>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <Board usuario={this.props.usuario} rut={this.props.rut}/>
                    </div>
                    <div className="col-md-3">
                        <AsideLeft/>
                    </div>
                </div>
            </div>
        );
    }
}