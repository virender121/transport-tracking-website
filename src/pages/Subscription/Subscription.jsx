import React from 'react'
import Footer from '../../components/Footer/Footer'
import "./Subscription.css"
import SubscriptionPic from '../../components/Images/subscription_pic.jpg'
import { useNavigate } from 'react-router-dom'

const Subscription = () => {
  const navigate = useNavigate()
  const handleClick=()=>{
     navigate('/newSubscription')
  }
  return (
    <div>
    <div className='subscription'>
      <h1 className='header_subscription'>Subscription</h1>
    </div><div className='cards flex'>
      <div className='flex-column flex-c'>
      <p className='text_sub fs-16'>Logistics Management magazine is the leading publication for logistics and supply chain professionals. Each issue is packed with timely insider information that you can use to better manage your entire logistics operation. Frequency: monthly.</p>
      <p className='text_sub fs-16'>To begin or renew your magazine subscription, please select from the choices below</p>
      <span className='button_spac'>
      <button  onClick={handleClick} className='button_subscription ls-2'>Start a Free Subscription</button>
      <button className='button_subscription'>Renew your Current Subscription</button></span>
      <p className='text_sub fs-16'>For assistance with other questions about your Logistics Management subscription, including duplicate subscriptions and back issue purchases, we can be reached by:</p>
    </div>
       <div className='flex'>
        <img src={SubscriptionPic} alt='pic_sub'/>
       </div>
    </div>
    <div>
      <img src='https://www.zoho.com/subscriptions/features/images/subscriptions-management/multiple-subscriptions-1x.png' alt ='subscribe'/>
    </div>
      <Footer/>
    </div>
  )
}

export default Subscription
