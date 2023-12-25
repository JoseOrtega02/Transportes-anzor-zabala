import React from "react";

import { LocationData, Location } from "../../models/Adress";
import { handleSubmit } from "../../utils/handleSumbit";
function InputFrom({
  setFrom,
}: {
  setFrom: React.Dispatch<React.SetStateAction<Location>>;
}) {
  const [opciones, setOpciones] = React.useState([]);

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, setOpciones)} method="get">
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
              key={self.crypto.randomUUID()}
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
    </div>
  );
}

export default InputFrom;
