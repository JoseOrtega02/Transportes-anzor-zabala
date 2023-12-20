import React from "react";
import autocomplete from "./utils/autocomplete";
import { LocationData } from "./models/Adress";
import MapComponent from "./components/MapComponent";
import direction from "./utils/direction";
function Tarifa() {
  const [opciones, setOpciones] = React.useState([]);
  const [from, setFrom] = React.useState({
    longitude: 0,
    latitude: 0,
    name: "",
  });
  const [to, setTo] = React.useState({ longitude: 0, latitude: 0, name: "" });
  const [data, setData] = React.useState({
    distance: 0,
    duration: 0,
    geojson: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let text = (event.target as HTMLFormElement).texto.value;
    let res = autocomplete(text);
    res.then((response) => {
      setOpciones(response);
    });
    event.preventDefault();
    return false;
  };

  const handleCalcular: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(from, to);
    let res = direction(from, to);
    res.then((response) => {
      console.log(response);
      setData({
        distance: response.routes[0].distance,
        duration: response.routes[0].duration,
        geojson: response.routes[0].geometry,
      });
    });

    event.preventDefault();
    return false;
  };
  return (
    <>
      <div>
        <h1>Calcula tu Tarifa</h1>
        <form onSubmit={handleSubmit} method="get">
          <label htmlFor="from">Desde </label>
          <input type="text" name="from" id="texto" placeholder="Origen" />
          <button
            type="submit"
            onClick={() => {
              let id = document.getElementById("opcionesFrom");
              if (id) {
                id.style.display = "block";
              }
            }}
          >
            Buscar Origen
          </button>
        </form>
        <div id="opcionesFrom" style={{ display: "none" }}>
          <ul>
            {opciones.map((opcion: LocationData) => (
              <li
                key={opcion.place_id}
                onClick={() => {
                  setFrom({
                    longitude: Number(opcion.lon),
                    latitude: Number(opcion.lat),
                    name: opcion.display_name,
                  });
                  setOpciones([]);
                  let id = document.getElementById("opcionesFrom");
                  if (id) {
                    id.style.display = "none";
                  }
                }}
              >
                {opcion.display_name}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="to">Hasta </label>
          <input type="text" name="to" id="texto" placeholder="Destino" />
          <button
            onClick={() => {
              let id = document.getElementById("opcionesTi");
              if (id) {
                id.style.display = "block";
              }
            }}
          >
            Buscar destino
          </button>
        </form>
        <div id="opcionesTi" style={{ display: "none" }}>
          <ul>
            {opciones.map((opcion: LocationData) => (
              <li
                key={opcion.place_id}
                onClick={() => {
                  setTo({
                    longitude: Number(opcion.lon),
                    latitude: Number(opcion.lat),
                    name: opcion.display_name,
                  });
                  setOpciones([]);
                  let id = document.getElementById("opcionesTi");
                  if (id) {
                    id.style.display = "none";
                  }
                }}
              >
                {opcion.display_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={handleCalcular} type="button">
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
            <p>Tiempo:{data.duration / 60}min </p>
            <p>Distancia: {data.distance / 1000} km</p>
          </>
        ) : (
          <p>Ingrese un origen y un destino</p>
        )}
      </div>
    </>
  );
}

export default Tarifa;
