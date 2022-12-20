import {
  GoogleMap,
  useLoadScript,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";

import { useState } from "react";
import "./MapIFrame_copy.css";

const MapIFrameCopy = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVQhEP2okcXMH9fvHlVpWAzbowx5-ZWZs",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <h4 className="propertyheader">Neighboorhood Viewer</h4>
      </div>
      <div>
        <ul className="d-flex flex-column mapslist">
          <li>
            Use the map to search addresses or cities to see the local
            neighborhoods.
          </li>
          <li>
            Click on one of the properties below to search for those addresses.
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <Map />;
      </div>
    </div>
  );
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
    console.log(place);
  };
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map">
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
              placeholder="Enter Address Here"
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

export default MapIFrameCopy;
