import React, { useCallback } from "react";

import { Location } from "./models/Adress";
import { handleCalcular } from "./utils/handleSumbit";

import MapComponent from "./components/Map/leafletMap/Map";
import InputLocation from "./components/Input/InputLocation";

import "./tarifa.css";

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
    <div className="results__container">
      <h1>Resultado de su tarifa:</h1>
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
    <main>
      <div className="title__container">
        <h1>Calcula tu Tarifa</h1>
        <p>Ingresa el inicio y hasta donde quieres realizar el transporte</p>
      </div>
      <div className="tarifa__container">
        <MapComponent geojson={data.geojson} />
        <div className="form__container">
          <div className="inputs__container">
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
            <button
              onClick={handleCalculation}
              type="button"
              className="btn__submit"
            >
              Calcular Tarifa
            </button>
          </div>

          <Results from={from} to={to} data={data} />
        </div>
      </div>
    </main>
  );
}

export default Tarifa;
