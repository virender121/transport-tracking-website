import React from 'react'
import './HomeCard1.css'
import { HomeData } from '../../data/HomeData'
const HomeCard1 = () => {
  return (
    <div className='container_card1'>
      <div className='homecard1'>
      {
        HomeData.map((home,id)=>{
          return (
            <div key={id} className='card1'>
              <div className="card-header">
                <h3>{home.heading}</h3>
                <span>{home.description}</span>
                <button className='btn2 fs-16'>Read more</button>
              </div>
            </div>
          )
        })
      }
      </div>
      </div>
    
  )
}

export default HomeCard1
