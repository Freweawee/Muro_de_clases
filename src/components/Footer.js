import React from "react";
import "../css/estilos.css";

export class Footer extends React.Component {

    render(){
        return(
            <footer className="page-footer">
                <div className="row">
                    <div className="col-md-12">
                        <span>© 2018 Universidad del Biobio</span>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <span>© 2014 Copyright Text</span>
                    </div>
                </div>
            </footer>
        );
    }
}