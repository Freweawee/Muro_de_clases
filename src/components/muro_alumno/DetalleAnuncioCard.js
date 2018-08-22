import React from 'react'
import { Body } from './Body';
import { Header } from '../componentes_genericos/Header';
import { Footer } from '../componentes_genericos/Footer';

export class DetalleAnuncioCard extends React.Component{

    constructor(){
        super()
        this.state = {
            anuncio : ""
        }
    }

    getAnuncio(){

    }
    
    render(){
        {console.log(this.props.publicacion);}
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h4>{this.props.publicacion.titulo}</h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <span>Busco profesor de: {this.props.publicacion.materia}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>{this.props.publicacion.descripcion}</span>
                    </div>
                </div>
            </div>
        );
    }
}