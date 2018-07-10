import React, { Component } from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { Footer } from './Footer';

class App extends Component {

    constructor(){
        super();
        this.state = {
            usuario: "",
            rut: ""
        }

        this.IniciarSesion();
        this.cerrarSesion = this.cerrarSesion.bind(this);
    }

    componentDidMount(){
        this.IniciarSesion();
    }

    IniciarSesion(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
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
        xmlhttp.open("POST","../server/initSession.php",true);
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
        xmlhttp.open("POST","../server/closeSession.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    render(){
        return(
            <div>
                {console.log("reload")}
                <Header usuario={this.state.usuario} rut={this.state.rut} cerrarSesion={this.cerrarSesion}/>
                <Body usuario={this.state.usuario} rut={this.state.rut}/>
                <Footer/>
            </div>
        );
    }  
}

export default App;
