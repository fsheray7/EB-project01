import React from 'react'
import CarouselCard from '../../components/carousel/CarouselCard.jsx'
import Banner from '../../components/banner/Banner.jsx'
import InfoSection from '../../components/infosection/InfoSection.jsx'
import Products from '../../components/productsection/Products.jsx'
import Testimonials from '../../components/testimonials/Testimoials.jsx'
import FAQSection from '../../components/faqasection/FaqSection.jsx'
import PricingSection from '../../components/pricigsection/PricingSections.jsx'


function Home() {

  return (
    <>

      <CarouselCard />

      <Banner />

      <InfoSection />

      <Products limit={4} />

      <Testimonials />

      <FAQSection />

      <PricingSection />


    </>
  )
}

export default Home
