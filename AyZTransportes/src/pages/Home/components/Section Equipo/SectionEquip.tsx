import CardHome from "../cardHome/CardHome";
import "./SectionEquip.css";

interface Object {
  title: string;
  description?: string;
  image: string;
}
function SectionEquip({
  title,
  description,
  data1,
  data2,
  id,
}: {
  title: string;
  description: string;
  data1: Object;
  data2: Object;
  id?: string;
}) {
  return (
    <section className="section__equipo" id={id}>
      <div className="section__title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section__cards">
        <CardHome props={data1} />
        <CardHome props={data2} />
      </div>
    </section>
  );
}

export default SectionEquip;
