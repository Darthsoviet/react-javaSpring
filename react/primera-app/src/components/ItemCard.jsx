import React, {Component} from 'react';
import ModForm from "./ModForm";

export class ItemCard extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
        this.colorCantidad = this.colorCantidad.bind(this);

    }


    colorCantidad(cantidad) {

        // eslint-disable-next-line default-case

        if (cantidad <= 5) {
            return {color: "#EE2408"};
        } else if (cantidad > 5 && cantidad <= 10) {
            return {color: "#EE9708"};
        } else if (cantidad > 10 && cantidad < 25) {
            return {color: "#D2EE08"};
        } else if (cantidad >= 25 && cantidad < 50) {
            return {color: "#5FEE08"};
        } else if (cantidad >= 50 && cantidad <= 100) {
            return {color: "#08EE24"};
        }else if (cantidad >= 100) {
            return {color:  "rgb(8, 255, 255)"};
        }

        return null;

    }

    handleOnClick(e) {

        this.props.eliminar(this.props.item.idItem);

    }

    toggleForm() {
        this.setState({show: !this.state.show});
    }

    render() {
        if (this.state.show) {
            return (
                <li>
                    <article className="item-card">
                        <div className="item-card-titulo">

                            <h1>
                                {this.props.item.nombre}
                            </h1>


                            <div className="item-card-contador" style={this.colorCantidad(this.props.item.cantidad)}>

                                {this.props.item.cantidad}
                            </div>
                        </div>
                        <div className="item-card-id">
                            <h1>
                                ID #{this.props.item.idItem}
                            </h1>

                        </div>
                        <p className="item-card-content">

                            {this.props.item.descripcion}

                        </p>
                        <div className="item-card-foot">
                            <div className="item-card-foot-precio">
                                <i className="fas fa-dollar-sign"/><p>{this.props.item.precio} </p>
                            </div>

                            <div className="contenedor-mod">
                                <button onClick={this.toggleForm.bind(this)}><i className="fas fa-cog"></i></button>
                            </div>
                            <div className="contenedor-btn">
                                <button onClick={this.handleOnClick.bind(this)}>
                                    Eliminar
                                </button>
                            </div>

                        </div>
                        <ModForm update={this.props.update} index={this.props.index}
                                 nombre={this.props.item.nombre}
                                 cantidad={this.props.item.cantidad}
                                 precio={this.props.item.precio}
                                 descripcion={this.props.item.descripcion}
                                 idItem={this.props.item.idItem} />

                    </article>
                </li>

            );
        } else {
            return (
                <li>
                <article className="item-card">
                    <div className="item-card-titulo">
                        <h1>
                            {this.props.item.nombre}
                        </h1>
                        <div className="item-card-contador" style={this.colorCantidad(this.props.item.cantidad)}>
                            {this.props.item.cantidad}
                        </div>
                    </div>
                    <div className="item-card-id">
                        <h1>
                            ID #{this.props.item.idItem}
                        </h1>

                    </div>

                    <p className="item-card-content">

                        {this.props.item.descripcion}

                    </p>
                    <div className="item-card-foot">
                        <div className="item-card-foot-precio">
                            <i className="fas fa-dollar-sign"/><p>{this.props.item.precio} </p>
                        </div>

                        <div className="contenedor-mod">
                            <button onClick={this.toggleForm.bind(this)}><i className="fas fa-cog"></i></button>
                        </div>
                        <div className="contenedor-btn">
                            <button onClick={this.handleOnClick.bind(this)}>
                                Eliminar
                            </button>
                        </div>

                    </div>



                </article>
            </li>);
        }
    }

}

export default ItemCard;
