import Carrosel from "../../Components/Carrosel/Carrosel";
import ps from "../../assets/icons/ps.png";
import ai from "../../assets/icons/ai.png";
import pr from "../../assets/icons/pr.png";
import ae from "../../assets/icons/ae.png";

function Home() {
  return (
    <div>
      <div className="bg-secondary pt-10  ">
        <div className="relative items-center flex flex-col mx-10">
          {/* Container principal com largura responsiva */}
          <div className="relative z-10 bg-offwhite w-full max-h-[800px] p-6 min-h-[800px] rounded-lg shadow-lg flex flex-col items-center justify-center mx-10 ">
            {/* Texto com largura responsiva e padding lateral */}
            <div className="  px-5 items-center flex flex-col">
              <h1 className="text-8xl  text-primary mb-10 font-titulo font-bold">
                Olá
              </h1>
              <p className="text-primary  text-xl font-sans max-w-[800px] text-center">
                É um prazer apresentar meu portfólio. Reuni aqui trabalhos que
                traduzem minha visão de design: simples, eficaz e centrado em
                pessoas. Navegue com calma e me chame se quiser conversar sobre
                um futuro projeto.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary h-[300px] w-full mt-[-100px] relative z-0"></div>
      </div>

      <div className="bg-secondary h-full w-full border-t-4 border-offwhite ">
        <div className="p-10 flex flex-col items-start px-20">
          <h2 className="text-primary text-8xl font-titulo font-bold pb-10 self-center">
            Trajetória
          </h2>
          <p className="text-2xl text-offwhite font-sans text-justify w-[] ">
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
          <ul className="flex flex-col gap-4 mt-20">
            <li className="flex items-center gap-3">
              <img src={ps} alt="Photoshop" className="w-20" />
              <span>Photoshop</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={ai} alt="Illustrator" className="w-20" />
              <span>Illustrator</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center bg-primary">
        <h1 className="text-offwhite">Alguns posts</h1>
        <div className="flex">
          <Carrosel></Carrosel>
        </div>
      </div>
    </div>
  );
}

export default Home;
