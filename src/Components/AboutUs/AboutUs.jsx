import React, { useEffect } from "react";
import AboutBanner from "./AboutBanner";
import ItSalution from "./ItSalution/ItSalution";
import SAboutUs from "./SAboutUs";
import Counter from "./Counter/Counter";
import MultiItemsSlider from "../../shared/Sliders/MultiItemsSlider";
import MultiSliderSwiper from "../../shared/Sliders/MultiSliderSwiper";
import { teamData } from "../../util/teamData";
import ShortContact from "./ShortContact";


const AboutUs = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us"
  }, [])


  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div>
      <AboutBanner />
      <SAboutUs />
      <ItSalution />
      <MultiSliderSwiper data={teamData} />
      <ShortContact />
    </div>
  );
};

export default AboutUs;