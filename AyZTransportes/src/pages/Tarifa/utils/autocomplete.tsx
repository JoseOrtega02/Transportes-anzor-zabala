function autocomplete(text: String) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  let a = [];
  return fetch(
    `https://us1.locationiq.com/v1/autocomplete?q=${text}&countrycodes=ar&accept-language=es&key=${
      import.meta.env.VITE_LOCATIONIQ_KEY
    }`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return (a = response);
    })
    .catch((err) => console.error(err));
}

export default autocomplete;
