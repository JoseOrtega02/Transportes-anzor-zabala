import React from "react";

import { LocationData, Location } from "../../models/Adress";
import { handleSubmit } from "../../utils/handleSumbit";

function InputTo({
  setTo,
}: {
  setTo: React.Dispatch<React.SetStateAction<Location>>;
}) {
  const [opciones, setOpciones] = React.useState([]);
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, setOpciones)}>
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
              key={self.crypto.randomUUID()}
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
  );
}

export default InputTo;
