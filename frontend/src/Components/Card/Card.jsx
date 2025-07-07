import { useState } from "react";
function Card({ img }) {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-tertiary w-[500px] h-[500px] m-5 items-center flex-col">
      <img
        src={img}
        alt="imagem do card"
      />
    </div>
  );
}
export default Card;
