import React from "react"
import { Aside } from './Aside'

export class Body extends React.Component {

    render(){
        return(
            <div className="body">
                <div className="row">
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                    <div className="col-md-6">
                        <br/>
                        <p>Este es el perfil creo</p>
                    </div>
                    <div className="col-md-3">
                        <Aside/>
                    </div>
                </div>
            </div>
        );
    }
}