import React, { useState } from "react";

const FirstNameValidator = ({ firstNameValidator }) => {
  return firstNameValidator ? (
    <div>Please enter your first name above.</div>
  ) : null;
};

export default FirstNameValidator;
