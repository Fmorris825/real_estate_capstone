import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormControl from "react-bootstrap/esm/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";

const MapsSearchForm = ({ setQuery }) => {
  const [tempQuery, setTempQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(tempQuery);
    // setTempQuery("");
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center">
      <FormGroup>
        <FormLabel>Already Got an Address in mind, Lets take a look?</FormLabel>
        <FormControl
          className="input_bar"
          type="text"
          required
          placeholder="Enter an address, city,  or zipcode,"
          value={tempQuery}
          onChange={(event) => setTempQuery(event.target.value)}
        />
        <button className="button">Search</button>
      </FormGroup>
    </Form>
  );
};

export default MapsSearchForm;
