import React from 'react';
import "../css/styles.css";
import Navigation from "./Navigation";
import AddForm from "./AddForm";
import Lista from "./Lista";
import Footer from "./Footer";
import FormularioLogModal from "./FormularioLogModal";
import Header from "./Header";
import  'whatwg-fetch'; 
import  {api} from "../js/api.js";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            items: "loading",
            oscuro: true,
            logShow: false,
            usuario: null


        }
        this.drawLista = this.drawLista.bind(this);
        this.desplegarFormularioLog = this.desplegarFormularioLog.bind(this);
        this.update = this.update.bind(this);
        this.quitarElemento = this.quitarElemento.bind(this);
        this.agregarUsuarioSesion = this.agregarUsuarioSesion.bind(this);

    }

    /* este metodo se encarga de cada que se llama hacer un GET ajax para obtener la liste
    * de productos de la base de datos si hay un error la lista se convierte en un tipo null y si no se manda a llamar el metodo
    * draw para pasar la lista al estado de la app*/


    agregarUsuarioSesion(usuario) {

        this.setState({ usuario: usuario });
    }

    update() {
        
        fetch(api.URL+"/item",
            { method: "GET" })
            .then((res) => {
                console.log(this.url);
                return res.json()
            })

            .then(json => {
                this.drawLista(json);
            }).catch((err) => {
                this.setState({ items: null })
                

            });
    }

    /* recibe un parametro que es una lista json y la mete al estado*/
    drawLista(json) {
        this.setState({ items: json })
    }

    /* se encarga de que al momento de que la pagina cargue y renderise el componente cargue la lista de items*/
    componentDidMount() {
        this.update();

    }

    /* Hace un ajax de tipo delete al servidor de glassfish */
    quitarElemento(id) {
        fetch(api.URL+"/item/" + id, { method: "delete" })
            .then((res) => {
                console.log(res.json());
            })
            .then(this.update);
    }

    //Se encarga de cambiar el estado de si el formularo modal se va a mostrar o no
    desplegarFormularioLog(event) {
        if (!this.state.logShow) {
            const form = document.getElementsByName("modal")[0];
            form.style.display = "block";
            this.setState({ logShow: true });
        } else {
            const form = document.getElementsByName("modal")[0];
            form.style.display = "none";
            this.setState({ logShow: false });
        }
    }

    render() {


        return (
            <div>

                <FormularioLogModal desplegarFormularioLog={this.desplegarFormularioLog}
                    agregarUsuarioSesion={this.agregarUsuarioSesion} />
                <div className="cuerpo-grid">

                    <Header desplegarFormularioLog={this.desplegarFormularioLog} usuario={this.state.usuario} />
                    <Navigation nombre="Primer Pagina React" items={this.drawLista} />
                    <aside>
                        <AddForm title="Inserte Item" update={this.update} />

                    </aside>
                    <main>
                        <Lista items={this.state.items} eliminar={this.quitarElemento}
                            update={this.update} />
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }

}


export default App;

