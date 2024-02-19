import React, { useRef, useState } from "react";
import mifoto from "../../Img/WhatsApp Image 2023-04-26 at 11.00.37-fotor-bg-remover-2023062223038.png";
import Nav from "../Nav/nav";
import Aboutme from "../AboutMe/aboutme";
import Herramienta from "../Herramientas.js/herramienta";
import "./home.scss";
import Proyects from "../Proyect/proyect.jsx";
import Contact from "../Contacto/contact.jsx";
import Footer from "../Footer/footer.jsx";

export default function Home() {
  const homeRef = useRef();
  const aboutmeRef = useRef();
  const toolsRef = useRef();
  const proyectRef = useRef();
  const contactRef = useRef();

  const [perspective, setPerspective] = useState(
    "perspective(500px) scale(1) rotateX(0) rotateY(0)"
  );

  function hanlerMove(e) {
    const layerY = e.clientY;
    const layerX = e.clientX;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xRotation = ((layerX - width / 2) / width) * 20;
    const yRotation = ((layerY - height / 2) / height) * 20;
    var newPerfpective = `perspective(500px) scale(1.2) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    setPerspective(newPerfpective);
  }

  function hanlerOutMouse() {
    setPerspective("perspective(500px) scale(1) rotateX(0) rotateY(0)");
  }
  function scrollToProyects() {
    if (proyectRef.current) {
      proyectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToHome() {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToTools() {
    if (toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToContact() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToAboutme() {
    if (aboutmeRef.current) {
      aboutmeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <div className="home_inicio">
        <div ref={homeRef}>
          <Nav
            scrollToHome={scrollToHome}
            scrollToAboutme={scrollToAboutme}
            scrollToContact={scrollToContact}
            scrollToProyects={scrollToProyects}
            scrollToTools={scrollToTools}
          />

          <div className="box_menu">
            <div>
              <div className="box_description" />
              <h2 className="box_h2">Hola! me llamo </h2>
              <h1 className="box_name">Franco Segovia</h1>
              <span className="box_span"> Desarrollador Full-Stack</span>

              <div className="div_buttom">
                <button className="btn-5">
                  <span>Descargar CV</span>
                </button>
              </div>
            </div>
            <div
              className="poster"
              onMouseMove={(e) => hanlerMove(e)}
              onMouseOut={hanlerOutMouse}
              style={{
                transform: perspective,
              }}
            >
              <img src={mifoto} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div ref={aboutmeRef}>
        <Aboutme />
      </div>
      <div ref={toolsRef}>
        <Herramienta />
      </div>
      <div ref={proyectRef}>
        <Proyects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
