import React, { useState } from "react";

const EmailValidatorStatement = ({ emailValidator }) => {
  return emailValidator ? <div>This email was invalid. Try Again.</div> : null;
};

export default EmailValidatorStatement;
