import React from 'react'
import './About.css'
// import Footer from '../../components/Footer/Footer';
const About = () => {
  return (
    <div>
        <div className='about_pic'>
         <div className='pic_text'>     
        <h2 className='header-title'>
                About Us
             </h2>
             <p className='header-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nisi eaque id perspiciatis, quidem debitis asperiores amet, esse ab laudantium reprehenderit officiis placeat rerum veritatis!</p>
        </div>
        </div>
        <div className='sections'>
          <div className='left'><h2>About Transports</h2>
          <p>Abc Transports Pvt. Ltd. is one of the leading logistic company of India pioneering in surface transportation all across the country. The company was founded in 1995 by our Directors Mr. S. K. Jain, Mr. R. K. Jain, Mr. A. K. Jain & Mr. Sanjay Jain</p>
          <p>We were the first transporter for Maruti Suzuki, getting their indent from Kandla to transport their initial CKD Vehicles to Gurgaon. The company was the forefront of Innovating the concept of "Wheels on Wheels" & laid the foundation for the Car Carrier Industry in India.</p>
          <p>We have been appreciated with the many prestigious awards including Udyog Rattan and Rashtriya Udyog for our exemplary services and contributions to the industry.</p>
          </div>
          <div className='right'>
            <img src='https://di-uploads-pod3.dealerinspire.com/garberautomallredesign/uploads/2019/08/silverado-header-2020.jpg' alt= 'truck'/>
          </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default About
