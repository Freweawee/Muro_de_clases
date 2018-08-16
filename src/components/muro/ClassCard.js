import React from "react";
import '../../css/ClassCard.css';

export class ClassCard extends React.Component {

    Inscripcion(idclase) {

        if(this.props.usuario!=""){
            window.location.href = '../../registra_curso/dist/index.html?'+'idclase='+idclase;
        }else{
            alert("Por favor inicie Sesion antes de Inscribirse");
        }
        
    }

    render(){
        console.log("classcard");
        console.log(this.props);
        return(
            <div className="ClassCard card">
                <div className="row">
                    <div className="col-sm-12 col-md-4 align-self-center">
                        <img className="rounded img-thumbnail img-fluid align-middle" src={"../img/"+this.props.pic} alt=""/>
                    </div>

                    <div className="col-sm-12 col-md-8">
                        <div className="row cardTitle">
                            <div className="col-md-12">
                                {this.props.titulo}
                            </div>
                        </div>
                        <div className="row cardBody">
                            <div className="col-md-12">
                                <p>{this.props.materia}</p>
                                <p>{this.props.nombreT}</p>
                                <p>{this.props.descripcion}</p> 
                            </div>
                        </div>
                        <div className="row cardBody">
                            <div className="col-md-12">
                                <button onClick={()=>this.props.cambiarvista(["to_registrarcurso",this.props.idclase])} className="btn btn-primary float-right">Inscripcion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}