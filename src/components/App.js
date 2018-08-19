import React, { Component } from 'react';
import { Muro } from './muro/Muro'
import { RegistraCurso } from './registrar_curso/RegistraCurso';
import { AnuncioAlumno } from './anuncio_alumno/AnuncioAlumno'
import { MuroAlumno } from './muro_alumno/MuroAlumno';


class App extends Component {

    constructor(){
        super();
        this.idfromchild = "";
        this.vista = "";
        this.state = {
            usuario: "",
            rut: "",
            active: 0
        }

        this.IniciarSesion();
        this.cerrarSesion = this.cerrarSesion.bind(this);
        this.AlterarVista = this.AlterarVista.bind(this);
    }

    componentDidMount(){
        this.IniciarSesion();
    }


    AlterarVista(params){
        //Opcion: Armar las vistas en esta funcion y guardar la vista a mostrar en el state?
        console.log(params)
        if(params[0] == "to_registrarcurso"){
            this.idfromchild = params[1]
            this.setState({
                active : 1
            })
        }

        if(params[0] == 'to_muroAlumno'){
            this.setState({
                active : 2
            })
        }

        if(params[0] == 'to_anuncioAlumno'){
            this.setState({
                active : 3
            })
        }
        
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

    CambiarVista(){
        var vista;
        switch(this.state.active){
            case 0:
                vista = <div>
                            <Muro usuario={this.state.usuario} rut={this.state.rut} cambiarvista={this.AlterarVista}/>
                        </div>;
                break;
            case 1:
                vista = <div>
                            <RegistraCurso idclase={this.idfromchild} cambiarvista={this.AlterarVista}/>
                        </div>;
                break;
            case 2:
                vista = <div>
                            <MuroAlumno usuario={this.state.usuario} rut={this.state.rut} cambiarvista={this.AlterarVista}/>
                        </div>
                break;
            case 3:
                vista = <div>
                            <AnuncioAlumno usuario={this.state.usuario} rut={this.state.rut} cambiarvista={this.AlterarVista}/>
                        </div>
                break;
        }

        return vista;

    }

    render(){
        return(
            this.vista = this.CambiarVista()
        );
    }  
}

export default App;
