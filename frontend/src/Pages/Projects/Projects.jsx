import Carrosel from "../../Components/Carrosel/Carrosel";
import Card from "../../Components/Card/Card";
import img1 from '../../assets/carrosel/1.jpg'
function Projects() {
  return (
<div className="w-full max-w-screen-xl mx-auto">
      <h1>Projetos</h1>

      <Card img={img1} />
    </div>
  );
}
export default Projects;
