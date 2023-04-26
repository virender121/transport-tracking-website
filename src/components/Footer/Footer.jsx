
import './Footer.css'
import { FiFacebook ,FiYoutube,FiTwitter, FiLinkedin } from 'react-icons/fi';
import {ImLocation} from 'react-icons/im';
 import {BsFillTelephoneFill} from 'react-icons/bs'
 import {HiMail} from 'react-icons/hi'

export default function Footer(){

    const pageLInks = [
        {
            icon : <FiFacebook/>,
            url : 'https://www.facebook.com'
        },
        {
            icon : <FiYoutube/>,
            url : 'https://www.youtube.com'
        },
        {
            icon : <FiTwitter/>,
            url : 'https://www.twitter.com'
        },
        {
            icon : <FiLinkedin/>,
            
            url:' https://www.linkedin.com/'
         
        },
        
        

    ]

    return(
        <footer className='footer'>
            <div className='left-footer'>
                <div className='heading'><h2>ABC <span style={{color:"yellow"}}>Transport</span></h2></div>
                <span>Home|Aboutus|Features|Clients|Contact</span>
                <p>Copyright&copy;2021<span style={{color:"red"}}>ABC TRANSPORT</span> | Logistics.</p>
                <p>Simplified. All Rights Reserved</p>
            </div>
            <div className='middle'>
                <p><ImLocation/><span style={{color:"yellow"}}>Ulhasnagar Mumbai</span></p>
                <p><BsFillTelephoneFill/><span style={{color:"yellow"}}>+91 62**86**54</span></p>
               <p><HiMail/> <span style={{color:"yellow"}}>virender.digitalshakha@gmail.com</span></p>
            </div>
            <div className='wrapper'>
                <p>About the company <span style={{color:"red"}}>ABC TRANSPORT</span>introduce ourselves as one of the leading transport company of India founded in january, 1995 having their own fleetof 475 trucks, including Car Carrier Trailers/Goods Containers Trailers/ Multi XL Containers.</p>
             <div className='icons'>{
                pageLInks.map(({ icon,url},index )=> (
                    <a href = {url} target = '_blank' key={index} >
                        <p className = 'icon'>
                            {icon}
                        </p> 
                    </a>
                ))
            }
            </div>

            </div>

          


        </footer>
    )
}
