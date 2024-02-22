import React, { useState, useCallback } from "react";
import { LocationData, Location } from "../../models/Adress";
import { handleSubmit } from "../../utils/handleSumbit";
import "./inputLocation.css";
import searchIcon from "../../../../assets/211817_search_strong_icon (1).svg";
import close from "../../../../assets/X_icon.svg";
interface InputLocationProps {
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  label: string;
  placeholder: string;
  value?: string;
}

function InputLocation({
  setLocation,
  label,
  placeholder,
  value,
}: InputLocationProps) {
  const [opciones, setOpciones] = useState<LocationData[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState(value);
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

  const handlerValue = function (e: any) {
    e.preventDefault();
    setInputValue(e.target.value);
    return e.target.value;
  };
  return (
    <div className="input__location__container">
      <label htmlFor="location">{label}</label>
      <form onSubmit={handleSearchSubmit} method="get">
        <input
          type="text"
          name="location"
          id="texto"
          placeholder={placeholder}
          value={value ? value : inputValue}
          onChange={handlerValue}
        />

        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      {showOptions && (
        <div className="options__container">
          <button>
            <img
              src={close}
              alt="boton menu"
              onClick={() => setShowOptions(false)}
            />
          </button>
          <ul className="options__list">{optionsList}</ul>
        </div>
      )}
    </div>
  );
}

export default InputLocation;
