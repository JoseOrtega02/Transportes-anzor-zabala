import React, { useState, useCallback } from "react";
import { LocationData, Location } from "../../models/Adress";
import { handleSubmit } from "../../utils/handleSumbit";

interface InputLocationProps {
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  label: string;
  placeholder: string;
}

function InputLocation({
  setLocation,
  label,
  placeholder,
}: InputLocationProps) {
  const [opciones, setOpciones] = useState<LocationData[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = useCallback(
    (opcion: LocationData) => {
      setLocation({
        longitude: Number(opcion.lon),
        latitude: Number(opcion.lat),
        name: opcion.display_name,
      });
      setOpciones([]);
      setShowOptions(false);
    },
    [setLocation]
  );

  const handleSearchSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit(event, setOpciones);
      setShowOptions(true);
    },
    [setOpciones]
  );

  const optionsList = opciones.map((opcion: LocationData, index: number) => (
    <li key={index} onClick={() => handleOptionClick(opcion)}>
      {opcion.display_name}
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSearchSubmit} method="get">
        <label htmlFor="location">{label}</label>
        <input
          type="text"
          name="location"
          id="texto"
          placeholder={placeholder}
        />
        <button type="submit">Buscar {label}</button>
      </form>
      {showOptions && (
        <div>
          <ul>{optionsList}</ul>
        </div>
      )}
    </div>
  );
}

export default InputLocation;
