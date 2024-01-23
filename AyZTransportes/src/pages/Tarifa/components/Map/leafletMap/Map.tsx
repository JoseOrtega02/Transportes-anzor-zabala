import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { propiertyMap } from "./tileLayer";
import { useMemo } from "react";

import "./mapCSS.css";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  geojson: any;
}

function MapComponent({ geojson }: MapComponentProps) {
  const zoom = 20;

  const routeCoordinates = useMemo(() => {
    if (!geojson) {
      return null;
    } else {
      return [geojson.from, geojson.to, geojson.coordinates];
    }
  }, [geojson]);

  return (
    <div className="map__container">
      <MapContainer center={[-31.5370909, -68.5251802]} zoom={zoom}>
        <TileLayer
          attribution={propiertyMap.attribution}
          url={propiertyMap.url}
        />
        {routeCoordinates && (
          <>
            <Marker position={routeCoordinates[0]} draggable={false} />
            <Marker position={routeCoordinates[1]} draggable={false} />
            <Polyline positions={routeCoordinates[2]} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
