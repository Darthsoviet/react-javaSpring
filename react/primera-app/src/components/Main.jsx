import React from "react";
import App from "./App";
import AppL from "./AppL";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            dark: false
        }
    }

    cambiarModo() {
        this.setState({dark: !this.state.dark});
    }

    render() {
        if (this.state.dark) {
            return (
                <App modo={this.cambiarModo.bind(this)}/>
            )
        } else {
            return (<AppL modo={this.cambiarModo.bind(this)}/>);
        }
    }
}
export default Main;