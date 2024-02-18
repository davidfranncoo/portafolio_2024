import React from "react";
import "./cardproyect.scss";
import programared from "../../../Img/Proyectos/programared.png";

export default function CardProyect({
  img,
  name,
  description,
  github,
  deploy,
}) {
  return (
    <div>
      <div className="book">
        <div className="book_dexcription">
          <h4 >Descripcion</h4>
          <h5>
            Red social responsiva en la cual podes interactua con otros
            programadoras, cuenta con: crecion de ususario, interaccion entre
            perfiles, pagos premium,<span>repostes </span> , entre otras.
          </h5>
       
        <h4>Herramientas</h4>
          <h5>
            react * redux * socket io* posgrest* 
          </h5>
        <button>deploy</button>
        <button>github</button>
        </div> 
       

        <div className="cover">
          <img src={programared} className="img_proyect"></img>
          <h1>PROGRAMARED</h1>
          <h6>Red Social</h6>
        </div>
      </div>
    </div>
  );
}
