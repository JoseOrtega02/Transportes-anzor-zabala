export const functionAdapter = (data: any, costFecth: number) => {
  const cost = data.routes[0].distance * costFecth;
  let coordinates = data.routes[0].geometry.coordinates.map((coord: any) =>
    coord.reverse()
  );
  const geojson = {
    from: data.routes[0].geometry.coordinates[0],
    to: data.routes[0].geometry.coordinates[
      data.routes[0].geometry.coordinates.length - 1
    ],
    coordinates: coordinates,
  };

  let dataRes = {
    distance: data.routes[0].distance,
    duration: data.routes[0].duration,
    geojson: geojson,
    cost: cost,
  };
  return dataRes;
};
