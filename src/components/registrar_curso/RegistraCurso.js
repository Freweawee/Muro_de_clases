import React from 'react';
import { Body } from './Body';
import { Header } from '../componentes_genericos/Header';
import { Footer } from '../componentes_genericos/Footer';

export class RegistraCurso extends React.Component {

    constructor(){
        super();
        this.state = {
            usuario: "",
            rut: ""
        }
    
        this.checkSesion();
        this.cerrarSesion = this.cerrarSesion.bind(this);
    }

    checkSesion(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                var $user = JSON.parse(xmlhttp.responseText);
                this.setState({
                    usuario: $user['nombre'],
                    rut: $user["rut"]
                });
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/RegistrarCurso/checkSession.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    cerrarSesion(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                this.setState({
                    usuario: "",
                    rut: ""
                });

                console.log("usuario: "+this.state.usuario);
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/RegistrarCurso/closeSession.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    render(){
        return(
            <div className="page">
                <Header usuario={this.state.usuario} rut={this.state.rut} cambiarvista={this.props.cambiarvista} cerrarSesion={this.cerrarSesion}/>
                <Body usuario={this.state.usuario} rut={this.state.rut} idclase={this.props.idclase}/>
                <Footer/>
            </div>
        );
    }  
}
