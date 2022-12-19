import picture from "./DDD.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <img className="banner" src={picture} alt="Dallas Skyline" />
      <h1 className="text_one">Morris Delta Realty</h1>
      <h3 className="text_two">
        The Best Real Estate Experience in the DFW to Dallas Area
      </h3>
      <h3 className="text_three">
        For All Your Commercial & Residential Real Estate Needs
      </h3>
    </div>
  );
};

export default Banner;
