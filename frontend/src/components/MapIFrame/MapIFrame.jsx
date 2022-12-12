import React, { useMemo } from "react";
import API_KEY from "../../API_KEY";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";

const MapIFrame = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDVQhEP2okcXMH9fvHlVpWAzbowx5-ZWZs"
      libraries={["places"]}
    >
      <Map />
    </LoadScript>
  );
};

function Map() {
  const [mapQuery, setMapQuery] = useState("");
  const center = useMemo(
    () => ({ lat: 32.8631138697085, lng: -96.80663511970849 }),
    []
  );
  const onLoad = (ref) => (this.searchBox = ref);

  const onPlacesChanged = () => console.log(this.searchBox.getPlaces());
  console.log(mapQuery);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ height: "600px", width: "900px" }}
    >
      <Marker position={center} />
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={onPlacesChanged}
        setMapQuery={setMapQuery}
        mapQuery={mapQuery}
      >
        <input type="text"></input>
      </StandaloneSearchBox>
      {/* <SearchBox

      /> */}
    </GoogleMap>
  );
}

export default MapIFrame;
