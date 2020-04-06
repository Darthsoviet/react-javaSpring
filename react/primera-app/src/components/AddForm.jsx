import React, {Component} from 'react';

import "../js/Item";

import Item from '../js/Item';
import box from "../icons/box-package-parcel-logistic-delivery-unpack-open-shipping-5-20583.png";
import {api} from "../js/api";


class AddForm extends Component {


    constructor() {
        super();
        this.state = {
            nombre: "",
            precio: "",
            descripcion: "",
            cantidad: "",
            show: true
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.setState({show: !this.state.show});
    }

    handleInput(event) {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(evento) {
        //ELIMINA COMPORTAMIENTO REFRESH DEFAUL DE SUBMIT
        evento.preventDefault();
        var nombre = this.state.nombre.trim();
        var precio = this.state.precio;
        var cantidad = this.state.cantidad;
        var descripcion = this.state.descripcion.trim();
        var item = new Item(nombre, precio, descripcion, cantidad);
        /*AJAX POST A REST JAVA*/
        fetch(api.URL+"/item",
            {
                method: "post",
                body: JSON.stringify(item),
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => {
                console.log(res.status);
            }).finally(this.props.update).then(() => {
            document.getElementById("form-item").reset();
        });

        // Limpia el formulario despues del envio de datos
        this.setState({nombre: "", descripcion: "", cantidad: "", precio: ""});

    }

    render() {
        if (this.state.show) {
            return (
                <div className="form-add">
                    <button className={"btn-toggle-on"} onClick={this.toggle}><i className="fas fa-ellipsis-h"></i>
                    </button>
                    <div className="form-head">
                        <h1>{this.props.title}</h1>
                        <i><img src={box} height={40} width={40} alt="box"/></i>
                    </div>

                    <form id="form-item" onSubmit={this.handleSubmit}>
                        <label htmlFor="nombre">Item</label>
                        <input type="text" name="nombre" id="nombre" required placeholder="Item"
                               onChange={this.handleInput}></input>

                        <progress className={"progreso-des"} value={this.state.nombre.length} max={45} style={{width: "100%"}}></progress>

                        <label htmlFor="descripcion">Descripcion</label>

                        <input type="text" name="descripcion" id="descripcion" required placeholder="Descripcion"
                               onChange={this.handleInput} ></input>
                        <progress className={"progreso-des"} value={this.state.descripcion.length} max={200} style={{width: "100%"}}></progress>

                        <label htmlFor="precio">Precio</label>
                        <input min={0} type="number" name="precio" id="precio" required placeholder="Precio" step="0.01"
                               onChange={this.handleInput}></input>
                        <label htmlFor="cantidad">Cantidad</label>
                        <input min={0} type="number" name="cantidad" id="cantidad" required placeholder="cantidad"
                               onChange={this.handleInput}></input>
                        <div className={"btn-g"}>
                            <button className="btn-submit" type="submit">Agregar</button>
                            <button className="btn-reset" type="reset">Limpiar</button>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (

                <div className="form-add-off">
                    <button className={"btn-toggle-off"} onClick={this.toggle}><i className="fas fa-bars"/>
                    </button>

                </div>


            );
        }
    }

}

export default AddForm;