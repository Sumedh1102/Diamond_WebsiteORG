import React from 'react'
import Hero from '../Home/Hero'
import Grid from '../Home/Grid'
import Shop from '../Home/Shop'
import ScrollingText from '../Home/ScrollingText'
import Quality from '../Home/Quality'
import LabGrownProcess from '../Home/LabGrownProcess'
import Featured from '../Home/Featured'
import Blogs from '../Home/Blogs'
import Header from '../Home/HeroS'
import Hero2 from '../Home/Hero2'
import Testimonials from '../Home/Testimonials'
import CSR from '../Home/CSR'
import FAQ from '../Home/FAQ'

const Home = () => {
  return (
    <>
     
      <Hero />
      <Hero2 />


      <Shop />
      <div className='bg-[#1A1A1A]'>
        <Quality />
      </div>

      <LabGrownProcess />

      <Testimonials />

      <CSR />

      <FAQ />

      <Blogs />
    </>
  )
}

export default Home