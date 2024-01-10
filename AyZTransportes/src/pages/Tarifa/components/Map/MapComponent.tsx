import { useRef, useEffect } from "react";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { Map, MapStyle } from "@maptiler/sdk";
export default function MapComponent({ geojson }: any) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const city = { lng: -68.5251802, lat: -31.5370909 };
  const zoom = 14;

  const initializeMap = () => {
    if (!map.current) {
      map.current = new Map({
        container: mapContainer.current!,
        style: MapStyle.BASIC,
        center: [city.lng, city.lat],
        zoom: zoom,
      });

      // Rest of the map initialization logic...
    }
  };

  useEffect(() => {
    const loadMap = async () => {
      try {
        const maptilersdk = await import("@maptiler/sdk");
        maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_KEY;
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
        }
      } catch (error) {
        console.error("Failed to load MapTiler SDK:", error);
      }
    };

    loadMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [geojson]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
