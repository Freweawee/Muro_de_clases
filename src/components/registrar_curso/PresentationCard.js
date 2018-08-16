import React from "react";
import "../../css/RegistrarCurso.css";

export class PresentationCard extends React.Component {

    constructor() {
        super();
        this.state = {
            idclase : "",
            nombreT : "",
            profilepic: "",
            titulo: "",
            materia: "",
            descripcion: "",
            fecha: "",
            usuario: ""
        }
    }

    componentDidMount(){
        console.log("clase "+this.props.idclase)
        this.getClase()
    }

    getClase() {
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var clase = JSON.parse(xmlhttp.responseText);
                this.buildPresentationCard(clase)
                console.log(clase);
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/RegistrarCurso/gestionClase.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("idclase="+this.props.idclase);
    }

    buildPresentationCard(clase) {
        this.setState({
            idclase : clase['idClase'],
            nombreT : clase['NombreT'] + " " + clase['ApellidosT'],
            profilepic: clase['PerfilT'],
            titulo: clase['Titulo'],
            materia: clase['Materia'],
            descripcion: clase['Descripcion'],
            fecha: clase['Fecha']
        })
    }

    Inscribirse() {
        if(this.props.usuario!=""){
            this.Inscripcion()
        }else{
            alert("Por favor inicie Sesion antes de Inscribirse");
        }
    }

    Inscripcion(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log("ins: "+xmlhttp.responseText);
                var respuesta = xmlhttp.responseText;

                if(respuesta==1){
                    alert("La clase fue inscrita con exito");
                }else{
                    alert("Error: Ya esta inscrito en esta clase");
                }
                
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/RegistrarCurso/gestionInscripcion.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("rut="+this.props.rut+"&idclase="+this.state.idclase);
    }
    

    render(){
        return(
            <div className="card pClassCard">
                <div className="row">
                    <div className="col-md-4 col-md-4">
                        <a href="#"><img class="rounded img-thumbnail img-fluid align-middle" src={"../img/"+this.state.profilepic} alt=""/></a>
                    </div>
                    <div className="col-md-4 col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="">{this.state.titulo}</span>
                            </div>
                        </div>
                        <div className="row pCardBody">
                            <div className="col-md-12">
                                <span className="">Tutor: {this.state.nombreT}</span>
                                <br/>
                                <span className="materia">{this.state.materia}</span>
                                <div>
                                    <p>{this.state.descripcion}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row pCardBody">
                            <div className="col-md-12">
                                <button className="btn btn-primary" onClick={()=>this.Inscribirse()}>Inscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}