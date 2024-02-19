import React from "react";
import "./nav.scss";
export default function Nav({scrollToHome,scrollToContact,scrollToTools,scrollToProyects,scrollToAboutme}) {
 

  return (
    <div>
      <nav className="Brand">
        <ul className="menu" id="menu">
          <button  onClick={scrollToHome}className="btn-43">
            <span  className="old">Inicio</span>
            <span className="new">Inicio</span>
          </button>
          <button onClick={scrollToAboutme} className="btn-43">
            <span className="old">Sobre mi</span>
            <span className="new">Sobre mi</span>
          </button>
          <button onClick={scrollToTools} className="btn-43">
            <span className="old">Herramientas</span>
            <span className="new">Herramientas</span>
          </button>{" "}
          <button onClick={scrollToProyects} className="btn-43">
            <span className="old">Proyectos</span>
            <span className="new">Proyectos</span>
          </button>
          <button onClick={scrollToContact} className="btn-43">
            <span className="old">Contacto</span>
            <span className="new">Contacto</span>
          </button>
        </ul>
      </nav>
    </div>
  );
}
