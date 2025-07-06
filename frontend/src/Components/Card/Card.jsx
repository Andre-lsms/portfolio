import { useNavigate } from "react-router-dom";
function Card({ img }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos"); // rota para onde você quer ir
  };

  return (
    <div className="bg-tertiary w-[200px] h-[200px] m-5">
      <img
        src={img}
        alt="imagem do card"
        onClick={handleClick}
        className=" cursor-pointer"
      />
    </div>
  );
}
export default Card;
