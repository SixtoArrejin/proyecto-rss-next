import Campeones from "../../Imagenes/Campeones.png";
import Image from "next/image";
const About = () => (
  <>
    <h1>Equipo</h1>
    <p>
      El equipo de la escaloneta es un grupo de futbolistas que han demostrado
      su talento, su pasión y su compromiso con el deporte más popular del
      mundo. Para salir campeones del mundial 2023, tuvieron que superar muchos
      obstáculos y desafíos, tanto dentro como fuera de la cancha. Tuvieron que
      enfrentarse a rivales de gran nivel, a lesiones, a críticas, a presiones y
      a expectativas. Pero nunca se rindieron ni perdieron la fe en sus
      capacidades y en su sueño. Con trabajo en equipo, disciplina, creatividad
      y entrega, lograron hacer historia y darle una alegría inmensa a su país y
      a sus aficionados. El equipo de la escaloneta es un ejemplo de
      perseverancia, de orgullo y de amor por el fútbol.
    </p>
    <div className="text-center">
      <Image src={Campeones} alt="Campeones" />
    </div>
  </>
);

export default About;
