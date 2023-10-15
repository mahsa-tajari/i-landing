import './social-media.css'
import {FiTwitter,FiFacebook,FiLinkedin,FiInstagram} from 'react-icons/fi'
export default function SocialMedia(){
    return(
        <div className='contact-us--social-media-wrapper'>
        <FiTwitter className='contact-us--social-media'></FiTwitter>
        <FiFacebook className='contact-us--social-media'></FiFacebook>
        <FiLinkedin className='contact-us--social-media'></FiLinkedin>
        <FiInstagram className='contact-us--social-media'></FiInstagram>
    </div>
    )
}