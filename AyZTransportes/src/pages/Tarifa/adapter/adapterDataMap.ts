export const functionAdapter = (data: any, costFecth: number) => {
  const roundedDistance = (data.routes[0].distance / 1000).toFixed(2);
  const cost = parseFloat(roundedDistance) * costFecth * 21;
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

    geojson: geojson,
    cost: cost,
  };
  return dataRes;
};
