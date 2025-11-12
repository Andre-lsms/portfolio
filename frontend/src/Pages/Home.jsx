import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos"); // rota para onde você quer ir
  };
  return (
    <div>
      <div className="relative bg-secondary pt-10 h-[calc(100vh-7rem)] overflow-hidden  ">
        <div className=" absolute z-10 top-[100%] bg-primary h-20 w-full -mt-20"></div>

        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-[80%] max-h-[90%] h-[90%] rounded-2xl bg-white shadow-2xl p-8 flex flex-col items-center justify-center">
          {/* Texto com largura responsiva e padding lateral */}
          <div className="  px-5 items-center flex flex-col">
            <h1 className="text-5xl  sm:text-6xl lg:text-8xl text-primary mb-10 font-titulo font-bold">
              Olá
            </h1>
            <p className="text-primary font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] text-justify leading-relaxed">
              É um prazer apresentar meu portfólio. Reuni aqui trabalhos que
              traduzem minha visão de design: simples, eficaz e centrado em
              pessoas. Navegue com calma e me chame se quiser conversar sobre um
              futuro projeto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
