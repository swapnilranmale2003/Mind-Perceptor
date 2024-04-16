import React from 'react'
import Service from '../Services/Service'
import WhoMP from '../WhoMP/WhoMP'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import ContactPage from '../ContactPage/ContactPage'
import FAQ from '../FAQ/FAQ'
import HomeMindPerceptor from '../HomeMindPerceptor/HomeMindPerceptor'

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
  )
}

export default HomePage
