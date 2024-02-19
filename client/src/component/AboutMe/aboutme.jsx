import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import gif1 from "../../Img/gif1.gif";
import gif3 from "../../Img/gif3.gif";

import "./aboutme.scss";

export default function Aboutme() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const props = useSpring({
    opacity: 1,
    transform: `scale(${scrollY === 0 ? 0.2 : 1})`,
    config: config.molasses,
  });
  return (
    <div className="box_aboutme">
      <div className="aboutme_name">
        <h1>SOBRE MI </h1>
      </div>
      <div className="aboutme_info">
        <div>
          <img className="gif1 img_animation" src={gif1} alt="Descripción del GIF" />
          <div className="aboutme_description">
            <h2>Desarrollador Full-Stack</h2>
            <animated.h3 className="aboutme_h3" style={props}>
              "He estado adquiriendo experiencia en diversas herramientas de
              <span> programación.</span> Actualmente, estoy en busca de
              oportunidades profesionales para aplicar mis{" "}
              <span>conocimientos.</span> Además, sigo{" "}
              <span>profesionalizandome</span> y me encuentro cursando la
              carrera de Ingeniería Electrónica ."
            </animated.h3>
          </div>
        </div>
        <div>
          <div className="aboutme_description">
            <h2>Trabajo en Equipo</h2>
            <animated.h3 style={props}>
              "Me apasiona trabajar en equipo, siempre estoy dispuesto a
              colaborar para alcanzar los <span>objetivos</span> establecidos.
              <br />
              También me <span>esfuerzo</span> constantemente por{" "}
              <span>mejorar</span> mis habilidades y ser capaz de resolver
              cualquier problema que pueda surgir en futuros{" "}
              <span>proyectos. </span>"
            </animated.h3>
          </div>
          <img className="gif2 img_animation" src={gif3} alt="Descripción del GIF" />
        </div>
      </div>
    </div>
  );
}
