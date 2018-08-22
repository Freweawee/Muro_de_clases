import React from 'react'
import { Header } from '../componentes_genericos/Header';
import { Body } from './Body';
import { Footer } from '../componentes_genericos/Footer';

export class MuroAlumno extends React.Component{
    
    render(){
        return(
            <div>
                <Header usuario={this.props.usuario} rut={this.props.rut} cambiarvista={this.props.cambiarvista}/>
                <Body usuario={this.props.usuario} rut={this.props.rut} irDetalle={this.props.irDetalle}/>
                <Footer/>
            </div>
        );
    }
}