interface Direction {
  longitude: number;
  latitude: number;
}
function direction(dir1: Direction, dir2: Direction) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const key = import.meta.env.VITE_LOCATIONIQ_KEY;
  return fetch(
    `https://us1.locationiq.com/v1/directions/driving/${dir1.longitude},${dir1.latitude};${dir2.longitude},${dir2.latitude}?steps=true&geometries=geojson&overview=full&key=${key}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
}

export default direction;
