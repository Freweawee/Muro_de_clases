import React from "react";
import "../css/estilos.css";

export class Header extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buscador</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cerrar Sesion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}