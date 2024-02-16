import React from "react";
import "./herramienta.scss"
import js from "../../Img/Herramientas/js1.png"
import html5 from "../../Img/Herramientas/html5.png"
import redux from "../../Img/Herramientas/redux4.png"
import css from "../../Img/Herramientas/csss1.png"
import node from "../../Img/Herramientas/node.png"
import react from "../../Img/Herramientas/React.png"
import sequelize from "../../Img/Herramientas/icon-Sequelize.png"
import posman from "../../Img/Herramientas/postman.png"
import git from "../../Img/Herramientas/git.png"
import boostrap from "../../Img/Herramientas/boostrap1.png"
import sass from "../../Img/Herramientas/sasspng.png"
import posgrest from "../../Img/Herramientas/Postgresql.png"
import CardTool from "../AboutMe/CardTool/cardtool";

export default function Herramienta(){


    return (<div className="box_herramienta">

    <div>

    <h2 >HERRAMIENTAS</h2>
    </div>
    <div className="herramientas_img">

       
          <CardTool img={js} name={"JavaScript"}/>
          <CardTool img={html5} name={"Html 5"}/>
          <CardTool img={redux} name={"Redux"}/>
          <CardTool img={css} name={"Css"}/>
          <CardTool img={node} name={"Node"}/>
          <CardTool img={react} name={"React"}/>
          <CardTool img={sequelize} name={"Sequelize"}/>
          <CardTool img={posman} name={"Postman"}/>
          <CardTool img={git} name={"Git"}/>
          <CardTool img={boostrap} name={"Bosstrap"}/>
          <CardTool img={sass} name={"Sass"}/>
          <CardTool img={posgrest} name={"PostgreSQL"}/>

       
       

    </div>
    
    </div>)
}