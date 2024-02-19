import React from "react";
import "./proyect.scss";
import CardProyect from "./CardProyect/cardproyect";
import programared from "../../Img/Proyectos/programared.png";
import portafolio1 from "../../Img/Proyectos/portafoliohtml.png";
import paises from "../../Img/Proyectos/paises.jpeg";
import ecommerce from "../../Img/Proyectos/reposteria.png";



export default function Proyects() {
  const data = [
    {
      name: "PROGRAMARED",
      subtitulo: "Red Social",
      img: programared,
      description:
        "ProgramRes es una Red social (Responsive) para programadores que ofrece varias funciones como: Creación de usuarios, Interacción, Pagos premium, Reportes y diversas características para una experiencia completa.",
        info:"React | Redux | SocketIo | Posgrest | Pasarela de Pagos | Chatboot. ",
    },  {
        name: "PAISES DEL MUNDO",
        subtitulo: "SPA",
        img: paises,
        description:
          "Es una aplicación web (no responsive) donde podrás realizar búsquedas por países, aplicar diversos filtros de ordenamiento y agregar actividades, con la posibilidad de aplicar filtros específicos a las mismas.",
          info:"Css | React | Redux | Express | PosgrestSQL .  ",
      },{
        name: "PORTAFOLIO (Básico)",
        subtitulo: "Landing Page",
        img: portafolio1,
        description:
          "Un portafolio (Responsivo) utilizando únicamente herramientas básicas, empleando exclusivamente CSS puro. Además, contiene animaciones y un formulario de contacto para mejorar la experiencia del usuario.",
          info:"Html | Css | JavaScript.  ",
      },{
        name: "LODE CALEB",
        subtitulo: "eCommerce",
        img: ecommerce,
        description:
          "LODE CALEB: Dulces Creaciones es un eCommerce donde podrás explorar la diversidad de dulces disponibles, conocer los precios unitarios y por cantidades, añadir productos al carrito y completar tu compra.",
          info:"Boostrap | React | Redux | JWT | Express | PosgrestSQL.",
      },
  ];

  return (
    <div className="box_proyectos">
      <div>
        <h2>Proyectos</h2>
      </div>
      <div className="div_proyect">
    {data.map((e) => {
        return <CardProyect name={e.name} subtitulo={e.subtitulo} img ={e.img} description={e.description} info={e.info} />;
    })}
    

    
      </div>
    </div>
  );
}
