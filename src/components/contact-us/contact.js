import './contact.css'
import Title from '../title/title'
import SocialMedia from '../social-media/social-media'
import ContactInfos from '../contact-info/contact-info'
export default function Contact(){
    return(
        <section className='contact-us'>
            <div className='contact-us--content'>
                <Title title={'تماس با ما'}></Title>
                <div className='contact-us--wrapper'>
                <div className='contact-us--contact-info'>
                    <div className='contact-us--contact-ways'>
                        <h3> اطلاعات تماس</h3>
                        <span>با روش‌های زیر با ما در تماس باشید.</span>
                    </div>
                    <div className='contact-infos-wrapper'>
                        <ContactInfos></ContactInfos>
                    </div>
                    <SocialMedia></SocialMedia>
                </div>
                <form action="#" className='contact-us-form'>
                    <label htmlFor="name" className='form-input-wrapper'>
                        <span>نام کامل</span> 
                        <input name='name' className='form-input' type="text" placeholder='نام خودتون رو وارد کنید' />
                    </label>
                    <label htmlFor="email" className='form-input-wrapper'>
                        <span>ایمیل</span>
                        <input name='email' className='form-input' type="email" placeholder='ایمیل خودتون رو وارد کنید' />
                    </label>
                    <label htmlFor="phone" className='form-input-wrapper'>
                        <span>شماره تلفن</span>
                        <input name='phone' className='form-input' type="text" placeholder='شماره تلفن خودتون رو وارد کنید' />
                    </label>
                    <label htmlFor="message" className='form-input-wrapper'>
                        <span>متن پیام</span>
                        <textarea name="message" className='form-input' cols="20" rows="5" placeholder='توضیحات مورد نظرتون...'></textarea>
                    </label>
                    <a href="#" className='header-link-primary contact-us--form-btn'>ارسال</a>
                </form>
                </div>
            </div>
        </section>        
    )
}