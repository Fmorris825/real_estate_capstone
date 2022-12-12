import React from "react";

const SearchBox = ({ onLoad, onPlacesChanged, mapQuery, setMapQuery }) => {
  function handleSubmit(event) {
    event.preventDefault();
    onPlacesChanged();
  }

  return (
    <form onSubmit={handleSubmit}>
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
        value={mapQuery}
        onChange={(event) => setMapQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchBox;
