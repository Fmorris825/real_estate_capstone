import React, { useMemo } from "react";
import API_KEY from "../../API_KEY";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapIFrame = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVQhEP2okcXMH9fvHlVpWAzbowx5-ZWZs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ height: "600px", width: "900px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default MapIFrame;
