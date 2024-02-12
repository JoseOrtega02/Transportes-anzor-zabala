import "./App.css";
import heroImg from "../../assets/mercedes_benz_van_schoolar.svg";
import HomeButtons from "./components/HomeButtons";
import CardHome from "./components/cardHome/CardHome";
import CardIMGHero from "../../assets/A_group_of_ten_employees_of_a_ 1.png";
import SectionEquip from "./components/Section Equipo/SectionEquip";
const dataCardHero = {
  title: "¿Quienes somos?",
  description:
    "La persona muestra una habilidad notable en comunicación efectiva, destacándose por su capacidad para transmitir ideas de manera clara y concisa.",
  image: CardIMGHero,
  id: "card__container--1",
};
import CardIMG from "../../assets/driver_van_of_a_scholar_transp 1.png";

const dataEquip = {
  title: "Jhon Doe",
  description:
    "La persona muestra una habilidad notable en comunicación efectiva, destacándose por su capacidad para transmitir ideas de manera clara y concisa. Su creatividad es evidente en la generación de soluciones innovadoras y originales.",
  image: CardIMG,
};
const dataEquip2 = {
  title: "¿Quienes somos?",
  description:
    "La persona muestra una habilidad notable en comunicación efectiva, destacándose por su capacidad para transmitir ideas de manera clara y concisa. Su creatividad es evidente en la generación de soluciones innovadoras y originales.",
  image: CardIMG,
};
import CardIMGFloat from "../../assets/driver_van_of_a_scholar_transp_float.jpg";
const dataFloat = {
  title: "mecedez benz van",
  image: CardIMGFloat,
  id: "card__equipo--2",
};
const dataFloat2 = {
  title: "mecedez benz van",
  image: CardIMGFloat,
  id: "card__equipo--2",
};
export function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero__text">
          <div>
            <h1>Transportes </h1>
            <h2>Anzor Zabala</h2>
          </div>
        </div>
        <img src={heroImg} alt="" className="hero__image" />
      </div>

      <HomeButtons />
      <CardHome props={dataCardHero} />
      <SectionEquip
        title="Nuestro Equipo"
        description="lorem ipsum dolor sit amet "
        data1={dataEquip}
        data2={dataEquip2}
      />
      <SectionEquip
        title="Nuestra flota"
        description="lorem ipsum dolor sit amet "
        data1={dataFloat}
        data2={dataFloat2}
        id="section__equipo--2"
      />
    </main>
  );
}

export default Home;
