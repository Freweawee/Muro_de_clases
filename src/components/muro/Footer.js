import React from "react";
import "../../css/estilos.css";

export class Footer extends React.Component {

    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <br/>
                    <span className="class">
                        © 2018 Universidad del Biobio
                    </span>
                    <br/>
                </div>
            </footer>
        );
    }
}