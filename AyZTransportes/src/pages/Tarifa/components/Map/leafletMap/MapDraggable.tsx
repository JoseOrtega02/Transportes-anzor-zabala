import React, { useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import reverseFetch from "./ReverseSearch";
import { Location } from "../../../models/Adress";

interface MapDraggableProps {
  setFrom: (prevState: any) => void;
  from: Location;
}

const MapDraggable: React.FC<MapDraggableProps> = ({ setFrom, from }) => {
  const markerRef = useRef<L.Marker | null>(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setFrom({
            longitude: marker.getLatLng().lng,
            latitude: marker.getLatLng().lat,
          });
          reverseFetch({
            latitude: marker.getLatLng().lat,
            longitude: marker.getLatLng().lng,
          }).then((response) => {
            setFrom({
              longitude: marker.getLatLng().lng,
              latitude: marker.getLatLng().lat,
              name: response.display_name,
            });
          });
        }
      },
    }),
    []
  );
  return (
    <Marker
      position={{
        lat: from.latitude,
        lng: from.longitude,
      }}
      draggable={true}
      eventHandlers={eventHandlers}
      ref={markerRef}
    >
      <Popup>{from.name}</Popup>
    </Marker>
  );
};

export default MapDraggable;
