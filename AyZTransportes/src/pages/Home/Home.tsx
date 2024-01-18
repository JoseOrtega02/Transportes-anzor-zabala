import "./App.css";
import heroImg from "../../assets/mercedes_benz_van_schoolar.svg";
import HomeButtons from "./components/HomeButtons";
import CardHome from "./components/cardHome/CardHome";
import CardIMG from "../../assets/A_group_of_ten_employees_of_a_ 1.png";
import SectionEquip from "./components/Section Equipo/SectionEquip";
const data = {
  title: "¿Quienes somos?",
  description:
    "La persona muestra una habilidad notable en comunicación efectiva, destacándose por su capacidad para transmitir ideas de manera clara y concisa.",
  image: CardIMG,
};
export function Home() {
  return (
    <main>
      <div className="hero__text">
        <h1>Transportes </h1>
        <h2>Anzor Zabala</h2>
      </div>

      <img src={heroImg} alt="" className="hero__image" />

      <HomeButtons />
      <CardHome props={data} />
      <SectionEquip
        title="Nuestro Equipo"
        description="lorem ipsum dolor sit amet "
      />
      <SectionEquip
        title="Nuestro Equipo"
        description="lorem ipsum dolor sit amet "
      />
    </main>
  );
}

export default Home;
