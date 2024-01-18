import CardHome from "../cardHome/CardHome";
import "./SectionEquip.css";
import CardIMG from "../../../../assets/driver_van_of_a_scholar_transp 1.png";
const data = {
  title: "Jhon Doe",
  description:
    "La persona muestra una habilidad notable en comunicación efectiva, destacándose por su capacidad para transmitir ideas de manera clara y concisa. Su creatividad es evidente en la generación de soluciones innovadoras y originales.",
  image: CardIMG,
};
const data2 = {
  title: "¿Quienes somos?",
  description:
    "La persona muestra una habilidad notable en comunicación efectiva, destacándose por su capacidad para transmitir ideas de manera clara y concisa. Su creatividad es evidente en la generación de soluciones innovadoras y originales.",
  image: CardIMG,
};
function SectionEquip({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section__equipo">
      <div className="section__title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <CardHome props={data} />
      <CardHome props={data2} />
    </section>
  );
}

export default SectionEquip;
