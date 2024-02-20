import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
   
       <div id="contacto" className="contacto">
            <div className="main">
               <div className="img">

               </div>
                <form className="contacto_form" 
                action="https://formsubmit.co/fancosegovia@gmail.com"
                 method="POST"
                 >
                    <h1  className="text_inicio2">CONTACTAME</h1>
                    <div className="fondo_contac">
                      <input 
                        className="input_name"
                        type="text" 
                        name="name"
                        placeholder="Nombre"/>
                        <input 
                        className="input_email"
                        type="email" 
                        name="email"
                        placeholder="Email"/>
                        <textarea 
                        className="input_area" 
                        type="text" 
                        name="text"
                        id="terea"
                        placeholder="Escribe tu mensaje aqui..."></textarea>
                        <div className="button">   
                            <button className="btn-book" type="submit" >Enviar</button>

                        <input type="hidden" name="_next" value="portafolio-2024-franco.vercel.app"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        </div>
                    </div>
                </form>
        </div>
</div>
   
  );
}
