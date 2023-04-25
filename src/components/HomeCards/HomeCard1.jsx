import React from 'react'
import './HomeCard1.css'
import { HomeData } from '../../data/HomeData'
const HomeCard1 = () => {
  return (
    
      <div className='homecard1'>
      {
        HomeData.map((home,id)=>{
          return (
            <div key={id}>
              <div className="card-header">
                <h3>{home.heading}</h3>
                <span>{home.description}</span>
                <button className='btn'>Read more</button>
              </div>
            </div>
          )
        })
      }
      </div>
    
  )
}

export default HomeCard1
