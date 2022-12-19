import React, { useState } from "react";

const EmailValidator = ({ emailValidator }) => {
  return emailValidator ? <div>This email was invalid. Try Again.</div> : null;
};

export default EmailValidator;
