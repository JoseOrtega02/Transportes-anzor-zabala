import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { propiertyMap } from "./tileLayer";
import { Marker } from "react-leaflet/Marker";

import "./mapCSS.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

function MapComponent({ geojson }: any) {
  const [routeCoordinates, setRouteCoordinates] = useState<any>(null);

  useEffect(() => {
    if (!geojson) {
      return;
    } else {
      setRouteCoordinates([
        geojson.coordinates[0].reverse(),

        geojson.coordinates[geojson.coordinates.length - 1].reverse(),
      ]);
    }
  }, [geojson]);
  const zoom = 20;

  return (
    <div>
      <MapContainer center={[-31.5370909, -68.5251802]} zoom={zoom}>
        <TileLayer
          attribution={propiertyMap.attribution}
          url={propiertyMap.url}
        />
        {routeCoordinates && (
          <>
            <Marker position={routeCoordinates[0]} draggable={false}></Marker>
            <Marker position={routeCoordinates[1]} draggable={false}></Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
