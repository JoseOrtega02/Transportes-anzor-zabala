import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { propiertyMap } from "./tileLayer";
import React, { useMemo } from "react";

import "./mapCSS.css";
import "leaflet/dist/leaflet.css";
import MapDraggable from "./MapDraggable";
import { Location } from "../../../models/Adress";

interface MapComponentProps {
  geojson: any;

  setFrom: React.Dispatch<React.SetStateAction<Location>>;

  setTo: React.Dispatch<React.SetStateAction<Location>>;

  to: Location;

  from: Location;
}

function MapComponent({
  setFrom,
  geojson,
  from,
  setTo,
  to,
}: MapComponentProps) {
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
        <MapDraggable setFrom={setFrom} from={from} />
        <MapDraggable setFrom={setTo} from={to} />
        {routeCoordinates && (
          <>
            {/* <Marker position={routeCoordinates[0]} draggable={false} />
            <Marker position={routeCoordinates[1]} draggable={false} /> */}
            <Polyline positions={routeCoordinates[2]} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
