import React from 'react'
import { Publicacion } from './Publicacion';

export class MuroAlumnoContenedor extends React.Component{
    
    constructor() {
        super();
        console.log("constructor")
        this.state = {
            board: "",
            publicaciones: "null"
        }
    }

    componentDidMount(){
        console.log("mounted");
        this.LoadPubliaciones();
        this.interval = setInterval(()=>this.LoadPubliaciones(),7000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    LoadPubliaciones(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log('Hola'+xmlhttp.responseText);
                var publicaciones = JSON.parse(xmlhttp.responseText);
                console.log("publicaciones: ");
                console.log(publicaciones);
                this.setState({
                    publicaciones: publicaciones
                });
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/PublicacionAlumnoControlador.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send('cmd=Listar');
    }


    buildBoard(){

        var board = [];
        var i = 0;

        console.log("size "+Object.keys(this.state.publicaciones).length)
        for(i = 0; i<Object.keys(this.state.publicaciones).length;i++){

            board.push(
                <div className="row">
                    <div className="col-md-12">
                        <Publicacion
                            usuario={this.props.usuario}
                            rut={this.props.rut}
                            publicacion = {this.state.publicaciones[i]}
                            irDetalle={this.props.irDetalle}
                        />
                    </div>
                    <hr className="col-md-12"/>
                </div>
            );
        }

        return board
    }

    render(){

        return(
            <div>
                {this.buildBoard()}
            </div>
        );
    }
}