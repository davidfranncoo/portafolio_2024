import React from "react";
import gif1 from "../../Img/gif1.gif";
import gif3 from "../../Img/gif3.gif";

import "./aboutme.scss";

export default function Aboutme() {
  return (
    <div className="box_aboutme">
      <div className="aboutme_name">
        <h1>sobre mi </h1>
      </div>
      <div className="aboutme_info">
        <div>
          <img  className="gif1" src={gif1} alt="Descripción del GIF" />
          <div className="aboutme_description">
            <h2>Desarrollador Full-Stack</h2>
            <h3>
              "He estado adquiriendo experiencia en diversas herramientas de
             <span> programación.</span> Actualmente, estoy en busca de oportunidades
              profesionales para aplicar mis <span>conocimientos.</span> Además, sigo <span>profesionalizandome</span> y me encuentro 
              cursando la carrera de Ingeniería Electrónica ."
            </h3>
          </div>
        </div>
        <div>
          <div className="aboutme_description">
            <h2>Trabajo en Equipo</h2>
            <h3>
              "Me apasiona trabajar en equipo, siempre estoy dispuesto a
              colaborar para alcanzar los <span>objetivos</span> establecidos.
              <br/> 
              También me <span>esfuerzo</span> constantemente por <span>mejorar</span> mis habilidades y ser capaz de
              resolver cualquier problema que pueda surgir en futuros <span>proyectos. </span>"
            </h3>
          </div>
          <img className="gif2" src={gif3} alt="Descripción del GIF" />
        </div>
      </div>
    </div>
  );
}
