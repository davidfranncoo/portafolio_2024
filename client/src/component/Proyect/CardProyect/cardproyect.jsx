import React from "react";
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
  function hanlerDeploy(){
    console.log("link deploy")
  }
  function hanlerGithub(){
    console.log("link github")
  }


  return (
    
      <div className="book">
        <div className="book_dexcription">
          <h4 >Descripción</h4>
          <h5>
            {description}
          </h5>
       
        <h4>Herramientas</h4>
          <h5>
          {info}
          </h5>
          <div className="div_btn">

        <button className="btn-book" onClick={hanlerDeploy()}>Deploy</button>
        <button className="btn-book" onClick={hanlerGithub()}>Github</button>
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
