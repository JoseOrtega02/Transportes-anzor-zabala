import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_KEY;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    console.log(import.meta.env.VITE_MAPTILER_KEY);
    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });
    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .addTo(map.current);
    map.current.on("load", () => {
      map.current?.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-68.525216, -31.53668],
              [-68.525628, -31.536706],
              [-68.525647, -31.536706],
              [-68.525712, -31.536706],
              [-68.525798, -31.536681],
              [-68.525935, -31.536692],
              [-68.527106, -31.53678],
              [-68.527224, -31.536789],
              [-68.527235, -31.536683],
              [-68.527335, -31.535683],
              [-68.527336, -31.535678],
              [-68.527345, -31.53558],
              [-68.527356, -31.535476],
              [-68.527404, -31.535001],
              [-68.527459, -31.534452],
              [-68.52747, -31.534367],
              [-68.527477, -31.534319],
              [-68.527487, -31.534255],
              [-68.5275, -31.534162],
              [-68.527506, -31.534114],
              [-68.527516, -31.533998],
              [-68.527575, -31.533279],
              [-68.527576, -31.533267],
              [-68.527584, -31.533181],
              [-68.527594, -31.533091],
              [-68.527715, -31.532052],
              [-68.527727, -31.53195],
              [-68.527739, -31.531846],
              [-68.527852, -31.530892],
              [-68.527864, -31.530791],
              [-68.528045, -31.529742],
              [-68.528289, -31.528944],
              [-68.528743, -31.527598],
              [-68.52876, -31.527505],
              [-68.528661, -31.527515],
              [-68.528036, -31.527715],
              [-68.527938, -31.52772],
              [-68.526717, -31.527481],
              [-68.526703, -31.527644],
            ],
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
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
