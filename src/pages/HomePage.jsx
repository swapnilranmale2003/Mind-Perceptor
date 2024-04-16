import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Services/Service";
import WhoMP from "../components/WhoMP/WhoMP";
import FAQ from "../components/FAQ/FAQ";
import HomeMindPerceptor from "../components/HomeMindPerceptor/HomeMindPerceptor";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

function HomePage() {
  return (
    <div>
      <HomeMindPerceptor />
      <Service />
      <WhoMP />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}

export default HomePage;
