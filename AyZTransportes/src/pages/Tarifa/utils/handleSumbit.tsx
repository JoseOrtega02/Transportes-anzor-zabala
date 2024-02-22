import React, { useCallback } from "react";
import autocomplete from "./autocomplete";
import direction from "./direction";
import { Location, LocationData } from "../models/Adress";
import getPrices from "../../../utils/getPrice";
import { functionAdapter } from "../adapter/adapterDataMap";

export const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>,
  setOpciones: React.Dispatch<React.SetStateAction<any>>
) => {
  let text = (event.target as HTMLFormElement).texto.value;
  let res = autocomplete(text);
  res.then((response) => {
    setOpciones(response);
  });
  event.preventDefault();
  return false;
};

export const handleCalcular = (
  event: React.MouseEvent<HTMLButtonElement>,
  setData: React.Dispatch<React.SetStateAction<any>>,
  from: Location,
  to: Location,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let res = direction(from, to);
  let costFecth: number;

  res.then((response) => {
    getPrices().then(async (data) => {
      costFecth = data[0].price;
      if (from.name === "" || to.name === "") {
        setLoading(false);

        return false;
      } else {
        setData(functionAdapter(response, costFecth));
        setLoading(false);
      }
    });
  });

  event.preventDefault();
  return false;
};

export const handleOptionClick = (
  setTo: React.Dispatch<React.SetStateAction<Location>>,
  setOpciones: React.Dispatch<React.SetStateAction<any>>,
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
) =>
  useCallback(
    (opcion: LocationData) => {
      setTo({
        longitude: Number(opcion.lon),
        latitude: Number(opcion.lat),
        name: opcion.display_name,
      });
      setOpciones([]);
      setShowOptions(false);
    },
    [setTo]
  );
