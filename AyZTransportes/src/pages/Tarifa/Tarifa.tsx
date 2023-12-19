import React from "react";
import autocomplete from "./utils/autocomplete";
import { LocationData } from "./models/Adress";
import MapComponent from "./components/MapComponent";
import direction from "./utils/direction";
function Tarifa() {
  const [opciones, setOpciones] = React.useState([]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let text = (event.target as HTMLFormElement).texto.value;
    let res = autocomplete(text);
    res.then((response) => {
      setOpciones(response);
      console.log(typeof response, response);
    });
    event.preventDefault();
    return false;
  };

  const from = { longitude: -68.5251802, latitude: -31.5370909 };
  const to = { longitude: -68.526631, latitude: -31.52764 };
  const handleCalcular: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    let res = direction(from, to);
    res.then((response) => {
      console.log(response);
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
          <button type="submit">Buscar Origen</button>
        </form>
        <div>
          <ul>
            {opciones.map((opcion: LocationData) => (
              <li
                key={opcion.place_id}
                onClick={() => {
                  console.log(opcion);
                  setOpciones([]);
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
          <button>Buscar destino</button>
        </form>
      </div>
      <button onClick={handleCalcular} type="button">
        Calcular
      </button>
      <MapComponent />
      <div>
        <h1>Resultados</h1>
      </div>
    </>
  );
}

export default Tarifa;
