
import './Footer.css'
import { FiFacebook ,FiYoutube,FiTwitter, FiLinkedin } from 'react-icons/fi';


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
            <div className='wrapper'>

            {
                pageLInks.map(({ icon,url},index )=> (
                    <a href = {url} target = '_blank' key={index} >
                        <p className = 'icon'>
                            {icon}
                        </p> 
                    </a>
                ))
            }

            </div>

          


        </footer>
    )
}
