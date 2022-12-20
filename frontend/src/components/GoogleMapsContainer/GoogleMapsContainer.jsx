import React, { useState, useEffect } from "react";

import MapIFrameCopy from "../MapIFrame/MapIFrame_copy";
import PropertiesIFrame from "../PropertiesIFrame/PropertiesIFrame";

const GoogleMapsContainer = ({ selectedProperty, setSelectedProperty }) => {
  return (
    <div>
      <div className="d-flex  flex-column m-3">
        <h4 className="propertyheader">Neighboorhood Viewer</h4>
        <ul className="d-flex flex-column propertyheader">
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
        <PropertiesIFrame
          selectedProperty={selectedProperty}
          setSelectedProperty={setSelectedProperty}
          className="m-3"
        />
      </div>
    </div>
  );
};

export default GoogleMapsContainer;
