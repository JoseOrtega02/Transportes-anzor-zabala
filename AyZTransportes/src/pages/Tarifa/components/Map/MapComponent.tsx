import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

export default function Map({ geojson }: any) {
  const mapContainer = useRef(null);
  const map = useRef<maptilersdk.Map | maplibregl.Map | null>(null);
  const city = { lng: -68.5251802, lat: -31.5370909 };
  const zoom = 14;

  const initializeMap = () => {
    if (map.current) return; // Evita la inicialización redundante

    // Inicializa el mapa
    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [city.lng, city.lat],
      zoom: zoom,
    });

    // Resto de la lógica de inicialización del mapa...
  };

  useEffect(() => {
    import("@maptiler/sdk").then((maptilersdk) => {
      maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_KEY;
      initializeMap();

      map.current?.on("load", () => {
        if (geojson !== "") {
          const routeCoordinates = [
            geojson.coordinates[0],

            geojson.coordinates[geojson.coordinates.length - 1],
          ];

          routeCoordinates.forEach((coord) => {
            if (map.current) {
              new maptilersdk.Marker({ color: "#FF0000" })
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

      return () => {
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    });
  }, [geojson]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
