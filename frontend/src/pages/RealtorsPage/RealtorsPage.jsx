import React from "react";
import MorrisDeltaHeader from "../../components/MorrisDeltaHeader/MorrisDeltaHeader";
import RealtorsContainer from "./RealtorsPageComponents/RealtorsContainer/RealtorsContainer";

const RealtorsPage = () => {
  return (
    <div>
      <MorrisDeltaHeader />
      <div className="bodyBackground">
        <RealtorsContainer />
      </div>
    </div>
  );
};

export default RealtorsPage;
