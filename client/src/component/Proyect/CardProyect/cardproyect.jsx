import React from "react";
import { Link } from "react-router-dom";
import "./cardproyect.scss";

export default function CardProyect({
  img,
  name,
  subtitulo,
  description,
  info,
  github,
  deploy,
}) {
  return (
    <div className="book">
      <div className="book_dexcription">
        <h4>Descripción</h4>
        <h5>{description}</h5>

        <h4>Herramientas</h4>
        <h5>{info}</h5>
        <div className="div_btn">
          <button className="btn-book">
            {deploy ? (
              <a
                className="a_decoration"
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            ) : (
              <>Deploy</>
            )}
          </button>
          <button className="btn-book">
            {github ? (
              <a
                className="a_decoration"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : (
              <>GitHub</>
            )}
          </button>
        </div>
      </div>

      <div className="cover">
        <img src={img} className="img_proyect"></img>

        <h1>{name}</h1>
        <h6>{subtitulo}</h6>
      </div>
    </div>
  );
}
