import ps from "../assets/icons/ps.png";
import ai from "../assets/icons/ai.png";
import pr from "../assets/icons/pr.png";
import ae from "../assets/icons/ae.png";
import canva from "../assets/icons/canva.png";
import capcut from "../assets/icons/capcut.png";
import davinci from "../assets/icons/davinci.png";
import affinity from "../assets/icons/Affinity.png";

function Sobre() {
  return (
    <div className="bg-offwhite  w-full border-t-4 border-offwhite ">
      <div className="p-10 flex flex-col items-start px-20">
        <h2 className="text-primary text-5xl  sm:text-6xl lg:text-8xl font-titulo font-bold pb-10 self-center">
          Trajetória
        </h2>
        <p className="text-primary font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify leading-relaxed">
          Desde pequeno, sempre tive o impulso de transformar ideias em algo
          visual. Foi ao buscar formas de dar vida aos meus projetos pessoais
          que conheci as ferramentas de design e me encantei com as
          possibilidades que elas ofereciam. Com o tempo, essa curiosidade
          evoluiu para uma paixão que ultrapassou os limites do pessoal. Passei
          a colaborar com outras pessoas, contribuindo para tornar reais as
          ideias delas também. Essa jornada me levou a mergulhar de forma mais
          profunda no mundo do design, aprimorando meu olhar, minha
          sensibilidade e minha técnica. Hoje, sigo explorando novas formas de
          comunicar com clareza e propósito, sempre apoiado pelas ferramentas
          que utilizo para dar vida aos meus projetos:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 justify-items-center w-full pt-10">
          <div className="items-center flex flex-col">
            <img
              src={ps}
              alt="Adobe Photoshop"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Adobe Photoshop
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={ai}
              alt="Adobe Illustrator"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Adobe Illustrator
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={pr}
              alt="Adobe Premiere"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Adobe Premiere
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={ae}
              alt="Adobe After Effects"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Adobe After Effects
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={capcut}
              alt="CapCut"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              CapCut
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={canva}
              alt="Canva"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Canva
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={davinci}
              alt="Davinci Resolve"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Davinci Resolve
            </span>
          </div>
          <div className="items-center flex flex-col">
            <img
              src={affinity}
              alt="Affinity"
              className="w-20 sm:w-24 md:w-28 rounded-xl "
            />
            <span className="text-primary font-sans font-bold pt-3 text-center">
              Affinity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
