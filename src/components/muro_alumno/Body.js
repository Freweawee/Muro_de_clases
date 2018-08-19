import React from 'react';
import { Aside } from '../componentes_genericos/Aside';
import { MuroAlumnoContenedor } from './MuroAlumnoContenedor';

export class Body extends React.Component {
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
                        <MuroAlumnoContenedor usuario={this.props.usuario} rut={this.props.rut}/>
                    </div>
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                </div>
            </div>
        );
    }  
}
