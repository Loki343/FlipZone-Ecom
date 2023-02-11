import React from "react";
import Carousels from "../Components/Homepage/Carousels";
import { DisOurFav } from "../Components/Homepage/DisOurFav/DisOurFav";
import { GiftAtNykaa } from "../Components/Homepage/GiftAtNykaa/GiftAtNykaa";

const Homepage = () => {
  return <div>
    <Carousels/>
    <GiftAtNykaa/>
    <DisOurFav/>
  </div>;
};

export default Homepage;
