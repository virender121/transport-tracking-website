import React from 'react';
import './Home.css';
import HomeCard1 from '../../components/HomeCards/HomeCard1'
import Footer from '../../components/Footer/Footer';
import MyCarousel from '../../components/Carousel/Carousel';
import HomeCard2 from '../../components/HomeCards/HomeCard2';
import HowWorks from '../../components/HowWorks/HowWorks';

const Home = () => {
  return (
    <div className='home'>
      <MyCarousel/>
    
      
        <HowWorks/>
        <h2 className="homeheading fs-24 fw-6">200+ Features...</h2>
        <HomeCard2/>
            <HomeCard1/>
          
        
      <Footer/>
    </div>
  )
}

export default Home
