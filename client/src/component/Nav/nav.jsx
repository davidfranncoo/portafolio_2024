import React, { useState } from "react";
import instagramIcon from "../../icons/instagram.svg";
import linkedinIcon from "../../icons/linkedin.svg";
import githubIcon from "../../icons/github.svg";
import closeIcon from "../../icons/close.svg";
import openIcon from "../../icons/open.svg";
import "./nav.scss";

export default function Nav({
  scrollToHome,
  scrollToContact,
  scrollToTools,
  scrollToProyects,
  scrollToAboutme,
}) {
  const [showMenu, setShowMenu] = useState(false);

  function openClose() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <nav className="Brand">
        <div className="menu" id="menu">
          
          <div className="imgs_icons">
           <a 
                href="https://www.instagram.com/davidfranncoo/"
                target="_blank"
                rel="noopener noreferrer">

            <img className="img_icono " src={instagramIcon}></img>
           </a>
           <a 
                href="https://www.linkedin.com/in/franco-segovia-23a397236/"
                target="_blank"
                rel="noopener noreferrer">

            <img className="img_icono" src={linkedinIcon}></img>
                </a>
                <a 
                href="https://github.com/davidfranncoo"
                target="_blank"
                rel="noopener noreferrer">

            <img className="img_icono" src={githubIcon}></img>
                </a>
          </div>

          <div className={`menu1 ${showMenu ? "show_menu2" : ""}`}>
            <button
              className=" button_open"
              id="open"
              style={{ display: showMenu ? "none" : "block" }}
              onClick={openClose}
            >
              <img className="img_icono" src={openIcon}></img>
            </button>
            <div className="h1_menu">
              <button
                className=" button_close"
                id="close"
                style={{ display: showMenu ? "block" : "none" }}
                onClick={openClose}
              >
                <img className="img_icono" src={closeIcon}></img>
              </button>
              <div className="menu_buttoms_openclose">
            <button onClick={scrollToHome} className="btn-43">
              <span className="old">Inicio</span>
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
          </div>
            </div>
          </div>

          <div className="menu_buttoms">
            <button onClick={scrollToHome} className="btn-43">
              <span className="old">Inicio</span>
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
          </div>
        </div>
      </nav>
    </div>
  );
}
