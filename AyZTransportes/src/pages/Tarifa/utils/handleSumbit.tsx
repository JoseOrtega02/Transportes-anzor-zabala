import React from "react";
import autocomplete from "./autocomplete";
import direction from "./direction";
import { Location } from "../models/Adress";
import getPrices from "../../../utils/getPrice";

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
  to: Location
) => {
  let res = direction(from, to);
  let costFecth: number;

  res.then((response) => {
    getPrices().then(async (data) => {
      costFecth = data[0].price;
      let cost = response.routes[0].distance * costFecth;

      setData({
        distance: response.routes[0].distance,
        duration: response.routes[0].duration,
        geojson: response.routes[0].geometry,
        cost: cost + "$",
      });
    });
  });

  event.preventDefault();
  return false;
};
