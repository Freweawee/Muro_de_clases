import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

export class PerfilAlumno extends React.Component {

    render(){
        return(
            <div className="body">
                <Header usuario={this.props.usuario} rut={this.props.rut}/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}