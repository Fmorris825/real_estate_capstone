import React, { useState } from "react";

const LastNameValidator = ({ lastNameValidator }) => {
  return lastNameValidator ? (
    <div>Please enter your last name above.</div>
  ) : null;
};

export default LastNameValidator;
