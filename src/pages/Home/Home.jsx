import React from 'react'
import './Home.css'
import HomeCard1 from '../../components/HomeCards/HomeCard1'
import Footer from '../../components/Footer/Footer'
import MyCarousel from '../../components/Carousel/Carousel'
import HomeCard2 from '../../components/HomeCards/HomeCard2'

const Home = () => {
  return (
    <div className='home'>
      <MyCarousel/>
      <HomeCard2/>
         <div className='homecard'>
          
            <HomeCard1/>
            
         </div>
      <Footer/>
    </div>
  )
}

export default Home
