import React from "react";
import "./proyect.scss";
import CardProyect from "./CardProyect/cardproyect";
import programared from "../../Img/Proyectos/programared.png";
import portafolio1 from "../../Img/Proyectos/portafoliohtml.png";
import paises from "../../Img/Proyectos/paises.jpeg";
import ecommerce from "../../Img/Proyectos/reposteria.png";
import menu1 from "../../Img/Proyectos/menu1.png";



export default function Proyects() {
  const data = [
   {
        name: "PORTAFOLIO (Básico)",
        subtitulo: "Landing Page",
        img: portafolio1,
        github:"https://github.com/davidfranncoo/portafolio_franco/tree/main",
        deploy:"https://portafolio-franco-tau.vercel.app/",
        description:
          "Un portafolio (Responsivo) utilizando únicamente herramientas básicas, empleando exclusivamente CSS puro. Además, contiene animaciones y un formulario de contacto para mejorar la experiencia del usuario.",
          info:"Html | Css | JavaScript.  ",
      },{
        name: "LODE CALEB",
        subtitulo: "eCommerce",
        img: ecommerce,
        github:"https://github.com/davidfranncoo/ReposteriaC",
        deploy:"https://reposteria-c.vercel.app/",
        description:
          "LODE CALEB: Dulces Creaciones es un eCommerce donde podrás explorar la diversidad de dulces disponibles, conocer los precios unitarios y por cantidades, añadir productos al carrito y completar tu compra.",
          info:"Boostrap | React | Redux | JWT | Express | PosgrestSQL.",
      },{
        name: "MENU DE BAR",
        subtitulo: "pagina web",
        img: menu1,
        github:"https://github.com/davidfranncoo/menuR",
        deploy:"https://menu-r-46kq.vercel.app/",
        description:
          "MENU para restaurante donde podras ver los precios de los productos y ademas poder buscar, lugar donde tambien estaran todas las redes sociales .",
          info:" Html | Css | JavaScript | React | ",
      },  {
        name: "PROGRAMARED",
        subtitulo: "Red Social",
        img: programared,
        github:"https://github.com/programared2023",
        deploy:"https://front-programa-red.vercel.app/",
        description:
          "ProgramRes es una Red social (Responsive) para programadores que ofrece varias funciones como: Creación de usuarios, Interacción, Pagos premium, Reportes y diversas características para una experiencia completa.",
          info:"React | Redux | SocketIo | Posgrest | Pasarela de Pagos | Chatboot. ",
      }, {
        name: "PAISES DEL MUNDO",
        subtitulo: "SPA",
        img: paises,
        github:"https://github.com/davidfranncoo/countries",
        deploy:"",
        description:
          "Es una aplicación web (no responsive) donde podrás realizar búsquedas por países, aplicar diversos filtros de ordenamiento y agregar actividades, con la posibilidad de aplicar filtros específicos a las mismas.",
          info:"Css | React | Redux | Express | PosgrestSQL .  ",
      },
  ];

  return (
    <div className="box_proyectos">
      <div>
        <h2>PROYECTOS</h2>
      </div>
      <div className="div_proyect">
    {data.map((e) => {
        return <CardProyect deploy={e.deploy} github={e.github}  name={e.name} subtitulo={e.subtitulo} img ={e.img} description={e.description} info={e.info} />;
    })}
    

    
      </div>
    </div>
  );
}
