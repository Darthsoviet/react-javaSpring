import React from "react";

class Header extends React.Component{

    render() {
        let usuario=null;
        if (this.props.usuario!=null) {
            usuario = this.props.usuario.usuario;
        }
        return( <header className="titulo">
            <h1 id="inicio" className="display2 titulo">Inventario

                <i className="fas fa-address-book"></i>

                {usuario}
            </h1>
            <button className={"btn-log"} onClick={this.props.desplegarFormularioLog}>Ingresar
            </button>
        </header>);
    }
}
export default Header;