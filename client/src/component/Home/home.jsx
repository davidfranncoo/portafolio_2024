import React, { useEffect, useState } from "react";
import mifoto from "../../Img/WhatsApp\ Image\ 2023-04-26\ at\ 11.00.37-fotor-bg-remover-2023062223038.png"
import Nav from "../Nav/nav";
import "./home.scss";

export default function Home() {
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


  return (
    <div className="home_inicio">
      <Nav />

      <div className="box_menu">
        <div>
          <div className="box_description" />
          <h2 className="box_h2">Hola! me llamo </h2>
          <h1 className="box_name">Franco Segovia</h1>
        <span className="box_span"> Desarrollador Full-Stack</span>

          <div className="div_buttom">
           
            
            <button className="btn-5"><span>Descarga CV</span></button>
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
        <img src={mifoto} alt =""/>
        </div>

      
      </div>
    </div>
  );
}
