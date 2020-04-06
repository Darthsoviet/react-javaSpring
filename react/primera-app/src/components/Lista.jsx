import React, { Component } from 'react';
import ItemCard from "./ItemCard"
import "../js/Item";
import Item from '../js/Item';
import minimi from "../icons/minimi.png";
import serv from "../icons/server.svg";
import noItems from "../icons/boat-logistic-transportation-deleivery-vehicle-ship-container-parcel-10-20541.png"

export class Lista extends Component {
    


render() {
    
    console.log(this.props.items);
    // FIXME CASO 1: ITEMS ENCONTRADOS
    if (this.props.items != null && this.props.items instanceof Array && this.props.items.length>0) {

        const lista = this.props.items.map((elemento) => {
            const i =
                new Item(elemento.nombre, elemento.precio, elemento.descripcion, elemento.cantidad, elemento.idItem);

            const index = this.props.items.indexOf(elemento);


            return (
                <ItemCard key={index} eliminar={this.props.eliminar} item={i}
                    update={this.props.update} />
            );
        });


        return (
            <ul className="lista-grid">
                {lista}
            </ul>
        );
        //CASO 2: LA HUBO UN ERROR AL ACCEDER AL SERVIDOR
    }
    else if (this.props.items == null) {

        return (
            <div className={"not"}>
                <img className={"minimi"} src={minimi} width={100} height={50} alt="" />

                <h1>404 no se encontro servidor</h1>
                <img className={"serv"} src={serv} alt="" />
            </div>

        );
    }

    //CASO 3 TODAVIA NO SE EXTRAEN LOS ITEMS DE LA BD
    else if (this.props.items === "loading") {
        return (
            <section>
                <ul className="lista-grid">
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                    <div className="item-card-loading" />
                </ul>
            </section>
        );

    }
    //FIXME no se muetra
    //LA BD ESTA VACIA
    else {

        return (
            <div className={"not"}>
                <img className={"minimi"} src={minimi} width={100} height={50} alt="" />

                <h1>No hay Items</h1>
                <img className={"serv"} src={noItems} alt="" />
            </div>);

    }
    
}
}

export default Lista;
