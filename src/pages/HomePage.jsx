import React from "react";
import Service from "../components/Services/Service";
import WhoMP from "../components/WhoMP/WhoMP";
import FAQ from "../components/FAQ/FAQ";
import HomeMindPerceptor from "../components/HomeMindPerceptor/HomeMindPerceptor";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ContactPage from "../components/ContactPage/ContactPage";

function HomePage() {
  return (
    <div>
      <HomeMindPerceptor />
      <Service />
      <WhoMP />
      <WhyChooseUs />
      <ContactPage />
      <FAQ />
    </div>
  );
}

export default HomePage;
