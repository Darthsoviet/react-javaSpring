import React, {Component} from 'react';
import {api} from "../js/api";

class Navigation extends Component {
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
        this.handleOnSubmitAll=this.handleOnSubmitAll.bind(this);

        this.state={
            cadena:""
        }
    }

    handleOnChange(event) {
        const {value} = event.target;
        this.setState({cadena :value});



    }
    handleOnSubmit(event){
        event.preventDefault();

        if(this.state.cadena) {
            fetch(api.URL+"/item/search/" + this.state.cadena, {
                method: "get"
            }).then((res) => {
                console.log(res.status);
                if(res.status===204){
                    return [];
                }
                return res.json();
            })
                .then((json) => {

                    this.props.items(json);
                });
        }else {
            fetch(api.URL+"/item", {
                method: "get"
            }).then((res) => {
                console.log(res.status);
                return res.json();
            })
                .then((json) => {

                    this.props.items(json);
                });

        }
    }

    handleOnSubmitAll(event){
        event.preventDefault();
        fetch(api.URL+"/item", {
            method: "get"
        }).then((res) => {
            return res.json();
        })
            .then((json) => {

                this.props.items(json);
            });
    }
    render() {
        return (

            <nav className="nav">

                <div className="buttons">

                    <button type={"submit"} onClick={this.handleOnSubmitAll}>Mostrar Todo</button>
                </div>


                    <form onSubmit={this.handleOnSubmit} className="buscador">
                        <input onChange={this.handleOnChange} type="text" name="buscar" id="buscar"
                               placeholder="Inserte Nombre De Item"></input>
                        <button type={"submit"}><i className="fas fa-search"></i></button>
                    </form>


            </nav>
        );
    }
}


export default Navigation;