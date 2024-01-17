import "./App.css";
import heroImg from "../../assets/mercedes_benz_van_schoolar.svg";
import HomeButtons from "./components/HomeButtons";
export function Home() {
  return (
    <main>
      <div className="hero__text">
        <h1>Transportes </h1>
        <h2>Anzor Zabala</h2>
      </div>

      <img src={heroImg} alt="" className="hero__image" />

      <HomeButtons />
    </main>
  );
}

export default Home;
