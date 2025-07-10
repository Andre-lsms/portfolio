import { useState } from "react";
function Card({ img,}) {

  return (
    <div className="bg-tertiary w-fit h-fit m-5 items-center flex-col rounded-2xl">
      <img
        src={img}
        alt="imagem do card"
        className="rounded-2xl"
      />
    </div>
  );
}
export default Card;
