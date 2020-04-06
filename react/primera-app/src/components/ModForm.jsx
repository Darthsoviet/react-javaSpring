import React from "react";
import Item from "../js/Item";
import {api} from "../js/api";

class ModForm extends React.Component {
    constructor() {
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            precio: "",
            cantidad: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.putItem = this.putItem.bind(this);

    }

    componentDidMount() {
        this.setState({
            nombre: this.props.nombre,
            cantidad: this.props.cantidad,
            precio: this.props.precio,
            descripcion: this.props.descripcion
        })
    }

    handleOnChange(evento) {
        const {name, value} = evento.target;
        this.setState({[name]: value});

    }

    putItem(item) {
        console.log(item);
        item.idItem = this.props.idItem;
        fetch(api.URL+"/item",
            {method: "put", body: JSON.stringify(item), headers: {"content-type": "application/json"}})
            .then((res => {
                console.log(res.json())
            })).then(this.props.update);

    }

    handleOnSubmit(event) {
        event.preventDefault();
        var item = new Item(this.state.nombre.trim(), this.state.precio, this.state.descripcion.trim(), this.state.cantidad);

        this.putItem(item);


    }

    render() {
        return (
            <form id="mod" className={"form-mod was-validated"} onSubmit={this.handleOnSubmit}>
                <input type="text" required placeholder="Nombre" name="nombre" onChange={this.handleOnChange}
                       value={this.state.nombre}/>
                <input type="text" required placeholder="Descripcion" name="descripcion" onChange={this.handleOnChange}
                       value={this.state.descripcion}/>
                <input min={0} type="number" required placeholder="Precio" name="precio" step="0.01"
                       onChange={this.handleOnChange} value={this.state.precio}/>
                <input min={0} type="number" required placeholder="cantidad" name="cantidad" onChange={this.handleOnChange}
                       value={this.state.cantidad}/>
                <button type="submit" className="btn btn-success">Actualizar</button>
            </form>

        );
    }
}

export default ModForm;
