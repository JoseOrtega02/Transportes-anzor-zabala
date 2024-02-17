import React, { useCallback } from "react";

import { Location } from "./models/Adress";
import { handleCalcular } from "./utils/handleSumbit";

import MapComponent from "./components/Map/leafletMap/Map";
import InputLocation from "./components/Input/InputLocation";

import "./tarifa.css";
import Loader from "../../components/Loader/Loader";

interface ResultsProps {
  from: Location;
  to: Location;
  data: {
    distance: number;
    duration: number;
    geojson: string;
    cost: number;
  };
}

const Results = ({ from, to, data }: ResultsProps) => {
  const { name: fromName } = from;
  const { name: toName } = to;
  const { distance, cost } = data;

  let result;
  if (fromName && toName) {
    const roundedDistance = (distance / 1000).toFixed(2);
    result = (
      <>
        <p>
          Viaje:
          <br />
          Desde :{fromName}
          <br />
          Hasta :{toName}
        </p>

        <p>Distancia: {roundedDistance} km</p>
        <p>Costo viaje de solo llevar: {cost.toLocaleString("en-US")} $</p>
        <p>
          Costo de viaje llevar y traer: {(cost * 2).toLocaleString("en-US")} $
        </p>
      </>
    );
  } else {
    result = <p></p>;
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

  const [loading, setLoading] = React.useState(false);

  const [from, setFrom] = React.useState<Location>(initialLocationValue);
  const [to, setTo] = React.useState<Location>(initialLocationValue);
  const [data, setData] = React.useState({
    distance: 0,
    duration: 0,
    geojson: "",
    cost: 0,
  });

  const handleCalculation = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) =>
      handleCalcular(event, setData, from, to, setLoading),
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
            {from.name === "" || to.name === "" ? (
              <p className="input__error"> Ingrese un origen y un destino</p>
            ) : (
              <></>
            )}

            <button
              onClick={(event) => {
                if (from.name === "" || to.name === "") {
                  setLoading(false);

                  return false;
                }
                handleCalculation(event);
                setLoading(true);
              }}
              type="button"
              className="btn__submit"
            >
              Calcular Tarifa
              {loading && <Loader className="btn__loader" />}
            </button>
          </div>

          <Results from={from} to={to} data={data} />
        </div>
      </div>
    </main>
  );
}

export default Tarifa;
