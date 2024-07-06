import React from 'react'
import NavBar from '../components/NavBar'
import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'
import HomeProducts from '../components/HomeProducts'
import HomeContact from '../components/HomeContact'

function Home() {
  return (
    <div>
        <NavBar/>
        <HomeBanner/>
        <HomeAbout/>
        <WhyChooseUs/>
        <HomeProducts/>
        <HomeContact/>
        <Footer/>
    </div>
  )
}

export default Home