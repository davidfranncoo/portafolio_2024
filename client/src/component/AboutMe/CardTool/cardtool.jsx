import React from "react";
import "./cardtool.scss"

export default function CardTool({ img, name }) {
  return (
    <div className="box_cardtool">
      <h3>{name}</h3>
      <img className="img_animation" src={img} />
    </div>
  );
}
