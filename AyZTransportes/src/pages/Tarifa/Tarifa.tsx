import React from "react";
import MapComponent from "./components/Map/MapComponent";
import InputFrom from "./components/Input/InputFrom";
import InputTo from "./components/Input/InputTo";
import { Location } from "./models/Adress";
import { handleCalcular } from "./utils/handleSumbit";
function Tarifa() {
  const initialLocationValue: Location = {
    longitude: 0,
    latitude: 0,
    name: "",
  };
  const [from, setFrom] = React.useState<Location>(initialLocationValue);
  const [to, setTo] = React.useState<Location>(initialLocationValue);
  const [data, setData] = React.useState({
    distance: 0,
    duration: 0,
    geojson: "",
    cost: "",
  });

  return (
    <>
      <div>
        <h1>Calcula tu Tarifa</h1>
        <InputFrom setFrom={setFrom} />

        <InputTo setTo={setTo} />
      </div>
      <button
        onClick={(event) => handleCalcular(event, setData, from, to)}
        type="button"
      >
        Calcular
      </button>
      <MapComponent geojson={data.geojson} />
      <div>
        <h1>Resultados</h1>
        {from.name !== "" && to.name !== "" ? (
          <>
            <p>
              Viaje: {from.name} - {to.name}
            </p>
            <p>Tiempo:{Math.round(data.duration / 60)}min </p>
            <p>Distancia: {Math.round(data.distance / 1000)} km</p>
            <p>Costo: {data.cost}</p>
          </>
        ) : (
          <p>Ingrese un origen y un destino</p>
        )}
      </div>
    </>
  );
}

export default Tarifa;
