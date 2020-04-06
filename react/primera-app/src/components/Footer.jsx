import React, {Component} from "react";
import java from "../icons/java-58-1174951.svg";
import mysql from "../icons/mysql-21-1174941.svg";
import js from "../icons/javascript-24-1174950.svg";
import git from "../icons/git-16-1175195.svg";
import css from "../icons/css3-8-1175200.svg";
import html from "../icons/html5-42-1175210.svg";

class Footer  extends Component {

    render() {

        return(
            <footer className={"pie"}>
                <section className={"social"}>
                    <h1>Social</h1>
                    <a target={"_blank"} href={"https://www.facebook.com/andres.dlvillrlujan"}><i
                        className="fab fa-facebook-square"></i></a>
                    <p>Sigueme en Facebook!</p>
                </section>
                <div className={"tecnologias"}>
                    <div className={"container-tec"}>
                        <div className={"container-back"}>
                            <h4>Back</h4>
                            <section className={"interno"}>
                                <div className={"logos"}>

                                    <i><img src={mysql} height={50} width={50} alt={"java"}/></i>
                                    <i><img src={java} height={50} width={50} alt={"mysql"}/></i>
                                    <i><img src={git} alt="git" height={50} width={50}/></i>
                                </div>
                                <article>
                                    <p>Se utilizo JEE 8 con el API REST jersey en un servidor glassfish con base de datos en MYSQL utilizando JDBC

                                    </p>
                                </article>
                            </section>
                        </div>
                        <div className={"container-front"}>
                            <h4>Front</h4>
                            <section className={"interno"}>
                                <div className={"logos"}>
                                    <i><img src={js} alt="js" width={30} height={30}/></i>
                                    <i><img src={html} alt="html" width={30} height={30}/></i>
                                    <i><img src={css} alt="css" width={30} height={30}/></i>
                                    <i className="fab fa-react"></i>
                                    <i className="fab fa-sass"></i>
                                    <i className="fab fa-bootstrap"></i>
                                </div>
                                <article>
                                    <p>Se utilizo la biblioteca de React.js Para generar las vistas y los estilos
                                        se diseñaron con ayuda de sass y css y una minima ayuda de bootstrap
                                    </p>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }


}
export default Footer;