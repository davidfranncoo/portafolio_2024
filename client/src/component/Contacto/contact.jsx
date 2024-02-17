import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="">
       <div id="contacto" class="contacto">
            <div class="main">
               <div class="img">

               </div>
                <form class="contacto_form" 
                // action="https://formsubmit.co/fancosegovia@gmail.com"
                //  method="POST"
                 >
                    <h1  class="text_inicio2">Contactame</h1>
                    <div class="fondo_contac">
                      <input 
                        class="input_name"
                        type="text" 
                        name="name"
                        placeholder="Nombre"/>
                        <input 
                        class="input_email"
                        type="email" 
                        name="email"
                        placeholder="Email"/>
                        <textarea 
                        class="input_area" 
                        type="text" 
                        name="text"
                        id="terea"
                        placeholder="Escribe tu mensaje aqui..."></textarea>
                        <div class="button">   
                            <button class="box_buttom2" type="submit" >Enviar</button>
                        </div>
                    </div>
                </form>
        </div>
</div>
    </div>
  );
}
