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
}: {
  title: string;
  description: string;
  data1: Object;
  data2: Object;
}) {
  return (
    <section className="section__equipo">
      <div className="section__title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <CardHome props={data1} />
      <CardHome props={data2} />
    </section>
  );
}

export default SectionEquip;
