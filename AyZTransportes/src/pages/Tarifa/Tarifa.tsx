import React, { Suspense, useCallback } from "react";
import InputFrom from "./components/Input/InputFrom";
import InputTo from "./components/Input/InputTo";
import { Location } from "./models/Adress";
import { handleCalcular } from "./utils/handleSumbit";

const MapComponentLazy = React.lazy(
  () => import("./components/Map/MapComponent")
);

function Results({ from, to, data }: any) {
  return (
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
  );
}

export function Tarifa() {
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

  const handleCalculation = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) =>
      handleCalcular(event, setData, from, to),
    [from, to]
  );

  return (
    <>
      <div>
        <h1>Calcula tu Tarifa</h1>
        <InputFrom setFrom={setFrom} />
        <InputTo setTo={setTo} />
      </div>

      <button onClick={handleCalculation} type="button">
        Calcular
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        <MapComponentLazy geojson={data.geojson} />
      </Suspense>

      <Results from={from} to={to} data={data} />
    </>
  );
}

export default Tarifa;
