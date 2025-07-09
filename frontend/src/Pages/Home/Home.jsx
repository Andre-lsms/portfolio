import Carrosel from "../../Components/Carrosel/Carrosel";
import ps from "../../assets/icons/ps.png";
import ai from "../../assets/icons/ai.png";
import pr from "../../assets/icons/pr.png";
import ae from "../../assets/icons/ae.png";
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

      <div className="bg-offwhite h-[calc(100vh)] w-full border-t-4 border-offwhite ">
        <div className="p-10 flex flex-col items-start px-20">
          <h2 className="text-primary text-5xl  sm:text-6xl lg:text-8xl font-titulo font-bold pb-10 self-center">
            Trajetória
          </h2>
          <p className="text-primary font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify leading-relaxed">
            Desde pequeno, sempre tive o impulso de transformar ideias em algo
            visual. Foi ao buscar formas de dar vida aos meus projetos pessoais
            que conheci as ferramentas de design e me encantei com as
            possibilidades que elas ofereciam. Com o tempo, essa curiosidade
            evoluiu para uma paixão que ultrapassou os limites do pessoal.
            Passei a colaborar com outras pessoas, contribuindo para tornar
            reais as ideias delas também. Essa jornada me levou a mergulhar de
            forma mais profunda no mundo do design, aprimorando meu olhar, minha
            sensibilidade e minha técnica. Hoje, sigo explorando novas formas de
            comunicar com clareza e propósito, sempre apoiado pelas ferramentas
            que utilizo para dar vida aos meus projetos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 justify-items-center w-full pt-10">
            <div className="items-center flex flex-col">
              <img
                src={ps}
                alt="Adobe Photoshop"
                className="w-20 sm:w-24 md:w-28"
              />
              <span className="text-primary font-sans font-bold pt-3 text-center">
                Adobe Photoshop
              </span>
            </div>
            <div className="items-center flex flex-col">
              <img
                src={ai}
                alt="Adobe Illustrator"
                className="w-20 sm:w-24 md:w-28"
              />
              <span className="text-primary font-sans font-bold pt-3 text-center">
                Adobe Illustrator
              </span>
            </div>
            <div className="items-center flex flex-col">
              <img
                src={pr}
                alt="Adobe Premiere"
                className="w-20 sm:w-24 md:w-28"
              />
              <span className="text-primary font-sans font-bold pt-3 text-center">
                Adobe Premiere
              </span>
            </div>
            <div className="items-center flex flex-col">
              <img
                src={ae}
                alt="Adobe After Effects"
                className="w-20 sm:w-24 md:w-28"
              />
              <span className="text-primary font-sans font-bold pt-3 text-center">
                Adobe After Effects
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-secondary">
        <h1 className="text-primary font-titulo font-bold text-5xl  sm:text-6xl lg:text-8xl  py-10">
          Alguns Posts
        </h1>
        <div className="flex flex-col">
          <Carrosel></Carrosel>
          <button
            className="shadow shadow-primary self-center h-14 mb-5 text-primary "
            onClick={handleClick}
          >
            ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
