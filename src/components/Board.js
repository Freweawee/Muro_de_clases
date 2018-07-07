import React from "react"
import { ClassCard } from "./Classcard";
import "../css/estilos.css";

export class Board extends React.Component {

    constructor() {
        super();
        console.log("constructor")
        this.state = {
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

                var clases = JSON.parse(xmlhttp.responseText);
                this.buildBoard(clases);
                console.log(clases);
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/getClases.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }


    buildBoard(clases){

        var board = [];
        var i = 0;

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

        this.setState({
            clases: board
        })
    }

    render(){
        return(
            <div className="board">
                {console.log("LOAD")}
                {this.state.clases}
            </div>
        );
    }
}