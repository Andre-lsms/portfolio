
import Card from "../../Components/Card/Card";

function Projects() {
  const projectImages = Object.values(
    import.meta.glob("/src/assets/carrosel/*.{jpg,jpeg,png,svg}", {
      eager: true,
    })
  ).map((module) => module.default);

  return (
    <div className="mt-10 mx-4 sm:mx-8 md:mx-20">
      <div className="bg-offwhite rounded-2xl w-full">
        <p className="text-primary p-6 sm:p-10 font-sans font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify leading-relaxed">
          Cada projeto que desenvolvo é uma oportunidade de explorar soluções
          visuais que combinam funcionalidade, estética e propósito. Nesta
          seleção, compartilho trabalhos que representam minha trajetória, meu
          processo criativo e o cuidado com cada detalhe — desde a ideia inicial
          até a entrega final.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20">
        
        {projectImages.map((imageSrc, index) => (
          <div key={index} className="w-auto md:w-4/5 rounded-2xl overflow-hidden  hover:shadow-2xl transition-shadow duration-300">
            <Card img={imageSrc} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;