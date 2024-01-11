export const loadMap = async (
  geojson: any,
  map: any,
  config: any,
  initializeMap: any,
  Marker: any
) => {
  try {
    config.apiKey = import.meta.env.VITE_MAPTILER_KEY;
    initializeMap();

    if (map.current && geojson !== "") {
      map.current?.on("load", () => {
        if (geojson !== "") {
          const routeCoordinates = [
            geojson.coordinates[0],

            geojson.coordinates[geojson.coordinates.length - 1],
          ];

          routeCoordinates.forEach((coord) => {
            if (map.current) {
              new Marker({ color: "#FF0000" })
                .setLngLat(coord)
                .addTo(map.current);
            }
          });
          map.current?.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: geojson.coordinates,
              },
            },
          });
          map.current?.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#888", // Color of the route line
              "line-width": 5, // Width of the route line
            },
          });
        }
      });
    }
  } catch (error) {
    console.error("Failed to load MapTiler SDK:", error);
  }
};

export default loadMap;
