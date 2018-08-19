import React, { Component } from 'react';
import { AnuncioAlumnoForm } from './AnuncioAlumnoForm';
import { Aside } from '../componentes_genericos/Aside';

export class Body extends Component {
    render(){
        return(
            <div >
                <div className="row">
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <AnuncioAlumnoForm rut={this.props.rut}/>
                    </div>
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                </div>
            </div>
        );
    }  
}
