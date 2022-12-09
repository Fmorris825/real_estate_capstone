import React from "react";

import RealtorCardSophia from "../RealtorCardSophia/RealtorCardSophia";
import RealtorCardDavid from "../RealtorCardDavid/RealtorCardDavid";
import "./RealtorsContainer.css";

const RealtorsContainer = ({}) => {
  return (
    <div>
      <RealtorCardSophia />
      <hr />
      <RealtorCardDavid />
    </div>
  );
};

export default RealtorsContainer;
