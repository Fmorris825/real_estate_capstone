import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyList from "../PropertiesPage/PropertiesPageComponents/PropertyList/PropertyList";
import GoogleMapsContainer from "../../components/GoogleMapsContainer/GoogleMapsContainer";
import MapIFrameCopy from "../../components/MapIFrame/MapIFrame_copy";
import MorrisDeltaHeader from "../../components/MorrisDeltaHeader/MorrisDeltaHeader";

const MapsAndNeighborsHoods = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  useEffect(() => {
    getProperties();
  }, []);

  async function getProperties() {
    const response = await axios.get("http://127.0.0.1:8000/api/properties/");
    setProperties(response.data);
  }

  return selectedProperty ? (
    <div>
      <MorrisDeltaHeader />
      <GoogleMapsContainer selectedProperty={selectedProperty} />{" "}
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  ) : (
    <div className="d-flex flex-column align-items-center">
      <MorrisDeltaHeader />
      <MapIFrameCopy />
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default MapsAndNeighborsHoods;
