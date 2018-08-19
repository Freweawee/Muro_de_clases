import React from 'react'
import { Body } from './Body'
import { Header } from '../componentes_genericos/Header';
import { Footer } from '../componentes_genericos/Footer';

export class Muro extends React.Component{

    constructor(){
        super()
        this.state = {
            vista : 0
        }
    }
    
    render(){
        return(
            <div>
                <Header usuario={this.props.usuario} rut={this.props.rut} cambiarvista={this.props.cambiarvista} cerrarSesion={this.cerrarSesion}/>
                <Body cambiarvista={this.props.cambiarvista} usuario={this.state.usuario} rut={this.state.rut}/>
                <Footer/>
            </div>
        );
    }
}