import React from "react";
import "../../css/RegistrarCurso.css";

export class Header extends React.Component {

    closeSession(){
        this.props.cerrarSesion();
    }

    render(){
        return(
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#"><img src="../img/logoubb.png" alt="" height="60"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={()=>this.props.cambiarvista(["to_perfilAlumno"])} href="#">{this.props.usuario}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buscador</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>this.closeSession()}>Cerrar Sesion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}