import React from "react";
import Usuario from "../js/Usuario";
class FormularioLogModal extends React.Component {

    constructor() {
        super();
        this.state = {
                usuario:"",
                contrasena:""



        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);


    }
    handleOnSubmit(event){
        event.preventDefault();

        var usuario = this.state.usuario;
        var contrasena = this.state.contrasena;
        //TODO Ajax

        this.props.agregarUsuarioSesion(new Usuario(usuario,null,null,null,null,contrasena,null));


    }
    handleOnChange(event) {
        const {name, value} = event.target;
        this.setState({

                    [name]: value

            }
        );

    }

    render() {
        return (
            <div className={"modal"} name={"modal"}>
                <div className={"modal-content"}>
                    <form className={"log-form"} onSubmit={this.handleOnSubmit}>
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario" placeholder={"usuario"}
                               onChange={this.handleOnChange}/>
                        <label htmlFor="contasena">contraseña</label>
                        <input type="password" name={"contrasena"} id={"contrasena"} placeholder={"Contraseña"}
                               onChange={this.handleOnChange}/>
                        <button type={"submit"}>Enviar Ajax</button>
                    </form>
                    <button className={"cancel-log"} onClick={this.props.desplegarFormularioLog}>Cancel
                    </button>
                </div>
            </div>);
    }
}

export default FormularioLogModal;