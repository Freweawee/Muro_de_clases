import React from 'react'

export class AnuncioAlumnoForm extends React.Component{

    constructor(){
        super()
        this.state = {
            rutEstudiante: "",
            materia: "",
            titulo: "",
            descripcion: "",
            email: "",
            telefono: "",
            direccion: "",
        }
    }

    Change(e) {
        this.setState({
            //firstName ; e.target.value
            [e.target.name]: e.target.value
        })
    }

    EnviarPublicacion(e){
        e.preventDefault();
        
        console.log(this.props.rut)
        this.setState({
            rutEstudiante : this.props.rut
        })

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText)
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/PublicacionAlumnoControlador.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send('cmd=Insertar'+
                    '&rutEstudiante='+this.state.rutEstudiante+
                    '&materia='+this.state.materia+
                    '&titulo='+this.state.titulo+
                    '&descripcion='+this.state.descripcion+
                    '&email='+this.state.descripcion+
                    '&telefono='+this.state.telefono+
                    '&direccion='+this.state.direccion);
    }
    
    render(){
        return(
            <div>
                <h3>Nuevo aviso como alumno para solicitar clases particulares</h3>
                <br/>
                <br/>
                <p>Datos de la clase o materia que necesitas:</p>
                <hr/>
                <br/>
                <br/>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="inputMateria" >Materia: </label>
                        <input name="materia" type="text" className="form-control" onChange={e => this.Change(e)} placeholder="Fisica, Programacion, Calculo..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMateria" >Titulo del aviso: </label>
                        <input name="titulo" type="text" className="form-control" onChange={e => this.Change(e)} placeholder="Busco tutor de Calculo que me enseñe Integrales"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMateria" >Descripcion: </label>
                        <input name="descripcion" type="text" className="form-control" onChange={e => this.Change(e)} placeholder="Busco prodesor de calculo que este disponible los dias lunes y jueves desde las 17:00hrs hasta las 18:30hrs"/>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <h3>Datos de Contacto:</h3>
                    <div className="form-group">
                        <label htmlFor="inputEmail" >E-mail: </label>
                        <input name="email" type="text" className="form-control" onChange={e => this.Change(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTelefono" >Telefono: </label>
                        <input name="telefono" type="text" className="form-control" onChange={e => this.Change(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMDireccion" >Direccion: </label>
                        <input name="direccion" type="text" className="form-control" onChange={e => this.Change(e)}/>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button onClick={(e)=>this.EnviarPublicacion(e)} className="btn btn-primary">Publicar</button>
                    </div>
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}