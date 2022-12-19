import React, { useState, useEffect } from "react";

import MapIFrameCopy from "../MapIFrame/MapIFrame_copy";
import PropertiesIFrame from "../PropertiesIFrame/PropertiesIFrame";

const GoogleMapsContainer = ({ selectedProperty }) => {
  return (
    <div className="d-flex justify-content-center">
      <PropertiesIFrame selectedProperty={selectedProperty} className="m-3" />
    </div>
  );
};

export default GoogleMapsContainer;
