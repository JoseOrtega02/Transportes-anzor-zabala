import React, { useCallback } from "react";

import { Location } from "./models/Adress";
import { handleCalcular } from "./utils/handleSumbit";

import MapComponent from "./components/Map/leafletMap/Map";
import InputLocation from "./components/Input/InputLocation";

interface ResultsProps {
  from: Location;
  to: Location;
  data: {
    distance: number;
    duration: number;
    geojson: string;
    cost: string;
  };
}

const Results = ({ from, to, data }: ResultsProps) => {
  const { name: fromName } = from;
  const { name: toName } = to;
  const { duration, distance, cost } = data;

  let result;
  if (fromName && toName) {
    const roundedDuration = Math.round(duration / 60);
    const roundedDistance = (distance / 1000).toFixed(2);
    result = (
      <>
        <p>
          Viaje: {fromName} - {toName}
        </p>
        <p>Tiempo: {roundedDuration} min</p>
        <p>Distancia: {roundedDistance} km</p>
        <p>Costo: {cost}</p>
      </>
    );
  } else {
    result = <p>Ingrese un origen y un destino</p>;
  }

  return (
    <div>
      <h1>Resultados</h1>
      {result}
    </div>
  );
};

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
        <InputLocation
          setLocation={setFrom}
          label="Desde"
          placeholder="Origen"
        />
        <InputLocation
          setLocation={setTo}
          label="Hasta"
          placeholder="Destino"
        />
      </div>

      <button onClick={handleCalculation} type="button">
        Calcular
      </button>

      <MapComponent geojson={data.geojson} />

      <Results from={from} to={to} data={data} />
    </>
  );
}

export default Tarifa;
