import React from 'react'
import { Body } from './Body';
import { Header } from '../componentes_genericos/Header';
import { Footer } from '../componentes_genericos/Footer';

export class AnuncioAlumno extends React.Component{

    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
                <Header usuario={this.props.usuario} rut={this.props.rut} cambiarvista={this.props.cambiarvista} cerrarSesion={this.cerrarSesion}/>
                <Body rut={this.props.rut}/>
                <Footer/>
            </div>
        );
    }
}