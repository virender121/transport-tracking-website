
import style from './Footer.module.css';
import { FiFacebook ,FiYoutube,FiTwitter, FiLinkedin } from 'react-icons/fi';
import { RiSendPlaneFill } from 'react-icons/ri';
import logo from '../Images/companylogo.jpg';

export default function Footer(){


    return(
        <>
        <div className={style.footer}>
            <div className={style.footer_box}>
                <div className={style.footer_box_social}>
                     <img src ={logo} alt= 'footer logo' height={90} width={90}/>
                     <p className='fs-15'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit similique nam esse aut voluptas ab qui veniam cupiditate accusantium, placeat dolorum quaerat obcaecati pariatur molestias.</p>
                     <div className={style.footer_social}>
                        <a href ="https://www.facebook.com">
                     <FiFacebook/>
                     </a>
                     <a href = " https://www.linkedin.com/">
                     <FiLinkedin/>
                     </a>
                     <a href = "https://www.twitter.com">
                        <FiTwitter/>
                     </a>
                     <a href = "https://www.youtube.com">
                        <FiYoutube/>
                     </a>
                     </div>
                </div>
                <div className={style.footer_box_about}>
                    <h3>Aboutus</h3>
                    {/* <About/> */}
                </div>
                <div className={style.footer_box_feature}>
                    <h3>Feature</h3>
                    {/* <Contactus/> */}
                </div>
                <div className={style.subscribe}>
                    <h3>Subscribe</h3>
               
                <div className={style.subscribe_box}>
                    <input type='email' placeholder='Enter your email *'/>
                    <RiSendPlaneFill className={style.subscribe_box_send}/>

                </div>
                <div className={style.subscribe_box_info}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum numquam deserunt rerum voluptates recusandae modi dolore itaque quo?</p>
                </div>
               
            </div>
          
            
            </div>
            <hr/>
        </div>
        
         <div className='flex-c fs-18'>
        <h3 style={{marginTop:"0.5rem",marginBottom:"0.5rem"}}> &#169; 2023 Designed and managed by <span style={{color:'var(--bs-danger)'}}>Digitalshakha</span></h3>
         </div>
         </>
    )

}


