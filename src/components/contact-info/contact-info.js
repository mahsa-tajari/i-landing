import './contact-info.css'
import {FiSmartphone} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
export default function ContactInfos(){
    return(
        <>
            <div className='contact-info'>
                <FiSmartphone className='contact-info--icon'></FiSmartphone>
                <span dir='ltr'>+98 000 000 0000</span>
            </div>
            <div className='contact-info'>
                <span className='contact-info--icon'>@</span>
                <span>example@example.com</span>
            </div>
            <div className='contact-info'>
                <HiOutlineLocationMarker className='contact-info--icon'></HiOutlineLocationMarker>
                <span>تهران، خیابان مولوی</span>
            </div>
        </>
    )
}