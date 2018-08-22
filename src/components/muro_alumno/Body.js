import React from 'react';
import { Aside } from '../componentes_genericos/Aside';
import { MuroAlumnoContenedor } from './MuroAlumnoContenedor';
import { DetalleAnuncioCard } from './DetalleAnuncioCard';

export class Body extends React.Component {

    constructor(){
        super()
        this.state = {
            vista : 0,
            publicacion : ""
        }

        this.irDetalle = this.irDetalle.bind(this)
    }

    irDetalle(publicacion){
        this.setState({
            vista : 1,
            publicacion : publicacion
        })
    }

    render(){
        return(
            <div >
                <div className="row">
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <h3>Estudiantes que buscan clases</h3>
                        <br/>
                        {(this.state.vista==0) ? <MuroAlumnoContenedor usuario={this.props.usuario} rut={this.props.rut} irDetalle={this.irDetalle}/> : <DetalleAnuncioCard publicacion={this.state.publicacion}/>}
                    </div>
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                </div>
            </div>
        );
    }  
}
