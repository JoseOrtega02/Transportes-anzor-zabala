import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { propiertyMap } from "./tileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "./mapCSS.css";
import "leaflet/dist/leaflet.css";
function MapComponent() {
  const zoom = 20;
  return (
    <div>
      <MapContainer center={[-31.5370909, -68.5251802]} zoom={zoom}>
        <TileLayer
          attribution={propiertyMap.attribution}
          url={propiertyMap.url}
        />
        <Marker position={[-31.5370909, -68.5251802]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
