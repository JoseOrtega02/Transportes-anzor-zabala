interface ReverseSearchProps {
  latitude: number;
  longitude: number;
}
const reverseFetch = (position: ReverseSearchProps) => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  return fetch(
    `https://us1.locationiq.com/v1/reverse?key=${
      import.meta.env.VITE_LOCATIONIQ_KEY
    }&lat=${position.latitude}&lon=${position.longitude}&format=json`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};

export default reverseFetch;
