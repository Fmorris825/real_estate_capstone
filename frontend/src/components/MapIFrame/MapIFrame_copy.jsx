import {
  GoogleMap,
  useLoadScript,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";
import { useEffect } from "react";
import { useState } from "react";

const MapIFrameCopy = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVQhEP2okcXMH9fvHlVpWAzbowx5-ZWZs",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const [searchBox, setSearchBox] = useState(null);
  const [searchedPlace, setSearchedPlace] = useState({});
  const [longitude, setLongitude] = useState(32.8631138697085);
  const [latitude, setLatitude] = useState(-96.80663511970849);
  const [center, setCenter] = useState({
    lat: 32.8631138697085,
    lng: -96.80663511970849,
  });

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  // const center = {
  //   lat: longitude,
  //   lng: latitude,
  // };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVQhEP2okcXMH9fvHlVpWAzbowx5-ZWZs",
    libraries: ["places"],
  });

  const onLoad = (ref) => setSearchBox(ref);

  let num = 0;
  let text = num.toString();

  const onPlacesChanged = () => {
    let place = searchBox.getPlaces();
    let placeArray = place["0"].geometry;
    setCenter({
      lat: placeArray.viewport.Wa.hi,
      lng: placeArray.viewport.Ia.hi,
    });
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <GoogleMap
        id="searchbox-example"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
        <>
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
              }}
            ></input>
          </StandaloneSearchBox>
        </>
      </GoogleMap>
    </div>
  );
};

export default Map;