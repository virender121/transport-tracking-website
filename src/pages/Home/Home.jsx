import React from 'react'
import './Home.css'
import HomeCard1 from '../../components/HomeCards/HomeCard1'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'></div>
        <div className='company_work'>
            <HomeCard1/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home
