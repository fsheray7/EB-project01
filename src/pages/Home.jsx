import React from 'react'
import CarouselCard from '../components/CarouselCard.jsx'
import Banner from '../components/Banner.jsx'
import DogCard from '../components/DogCard.jsx'
import FeaturedProducts from '../components/Products.jsx'
import Testimonials from '../components/Testimoials.jsx'
import FAQSection from '../components/FaqSection.jsx'
import PricingSection from '../components/PricingSections.jsx'


function Home() {
  
  return (
    <>

    <CarouselCard  />

    <Banner />

    <DogCard />

    <FeaturedProducts />

    <Testimonials />

    <FAQSection />

    <PricingSection />

     
    </>
  )
}

export default Home
