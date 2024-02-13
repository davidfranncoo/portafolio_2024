import React from "react";
import "./nav.scss";
export default function Nav() {
  return (
    <div>
      <nav className="Brand">
        <ul className="menu" id="menu">
          <button className="btn-43">
            <span className="old">Inicio</span>
            <span className="new">Inicio</span>
          </button>
          <button className="btn-43">
            <span className="old">Sobre mi</span>
            <span className="new">Sobre mi</span>
          </button>
          <button className="btn-43">
            <span className="old">Herramientas</span>
            <span className="new">Herramientas</span>
          </button>{" "}
          <button className="btn-43">
            <span className="old">Proyectos</span>
            <span className="new">Proyectos</span>
          </button>
        </ul>
      </nav>
    </div>
  );
}
