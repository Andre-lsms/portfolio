import { useState } from "react";
function Card({ img }) {

  return (
    <div className="bg-tertiary w-fit h-fit m-5 items-center flex-col">
      <img
        src={img}
        alt="imagem do card"
      />
    </div>
  );
}
export default Card;
