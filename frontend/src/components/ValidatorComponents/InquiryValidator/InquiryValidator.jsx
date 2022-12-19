import React, { useState } from "react";

const InquiryValidator = ({ inquiryValidator }) => {
  return inquiryValidator ? (
    <div>Please enter what you would like to inquire above.</div>
  ) : null;
};

export default InquiryValidator;
