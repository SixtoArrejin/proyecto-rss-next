import Director from "../../Imagenes/Director.png";
import Image from "next/image";

const Tecnico = () => (
  <div>
    <h1>Director tecnico</h1>
    <p>
      Escaloni fue el gran artífice del triunfo histórico de la selección
      argentina en el mundial 2022, donde logró coronarse campeón tras vencer a
      Francia en una dramática definición por penales. El entrenador supo
      plasmar su idea futbolística en un equipo que mostró solvencia, carácter y
      talento a lo largo del torneo. Escaloni armó un grupo unido y comprometido
      con la camiseta, que supo sobreponerse a las adversidades y que nunca bajó
      los brazos. Su mérito fue potenciar las virtudes de sus jugadores,
      especialmente de Lionel Messi, quien fue la gran figura del mundial y el
      líder indiscutido del plantel. Escaloni también acertó en los cambios y en
      las variantes tácticas que le dio al equipo, demostrando su capacidad y su
      audacia para tomar decisiones. Escaloni se convirtió así en el héroe de la
      escaloneta, el hombre que devolvió la gloria al fútbol argentino después
      de 36 años de sequía.
    </p>
    <div className="text-center">
      <Image src={Director} alt="Campeones" />
    </div>
  </div>
);

export default Tecnico;
