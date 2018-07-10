import React from "react"
import { ClassCard } from "./Classcard";
import "../css/estilos.css";

export class Board extends React.Component {

    constructor() {
        super();
        console.log("constructor")
        this.state = {
            board: "",
            clases: ""
        }


    }

    componentDidMount(){
        console.log("mounted");
        this.checkClases();
        this.interval = setInterval(()=>this.checkClases(),10000);
    }

    checkClases(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                var classes = JSON.parse(xmlhttp.responseText);
                this.setState({
                    clases: classes
                });
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/gestionClase.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }


    buildBoard(){

        var board = [];
        var i = 0;
        var clases = this.state.clases;

        for(i = 0; i<Object.keys(clases).length;i++){

            var descripcion = clases[i]['Descripcion'];
            var max_lenght = 100;

            if(descripcion.length>max_lenght){
                descripcion = descripcion.substring(0,max_lenght) + "...";
            }

            board.push(
                <div className="row">
                    <div className="col-md-12">
                        <ClassCard
                            usuario={this.props.usuario}
                            rut={this.props.rut}
                            idclase={clases[i]['idClase']}
                            titulo={clases[i]['Titulo']}
                            materia={clases[i]['Materia']} 
                            nombreT={clases[i]['NombreT'] +" "+clases[i]['ApellidosT']} 
                            pic={clases[i]['PerfilT']} 
                            descripcion={descripcion}
                        />
                    </div>
                </div>
            );
        }

        return board
    }

    render(){

        return(
            <div className="board">
                {console.log("Board")}
                {console.log(this.props)}
                {this.buildBoard()}
            </div>
        );
    }
}