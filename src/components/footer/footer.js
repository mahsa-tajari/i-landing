import './footer.css'
import ContactInfos from '../contact-info/contact-info'
import SocialMedia from '../social-media/social-media'
export default function Footer(){
    return(
        <footer className='footer'>
            <div className="footer--top-wrapper">
                <ul className='footer-list'>
                    <span className='footer-list-title'>دسترسی سریع</span>
                    <li><a className="footer-item" href="#">تعرفه‌ها</a></li>
                    <li><a className="footer-item" href="#">سوالات متداول</a></li>
                    <li><a className="footer-item" href="#">تماس با ما</a></li>
                </ul>
                <div className="footer-list">
                    <span className='footer-list-title'>تماس با ما</span>
                    <ContactInfos></ContactInfos>
                </div>
                <div className='flow-us'>
                    <span className='footer-list-title'>ما را دنبال کنید</span>
                    <p>برای دریافت آخرین اخبار و آفرها ایمیل خود را وارد کنید تا در خبرنامه عضو شوید.</p>
                    <div className='flow-us--email-wrapper'>
                        <input type="email" placeholder='ایمیل خود را وارد کنید' />
                        <a className='footer-link' href="#">عضویت</a>
                    </div>
                </div>
            </div>
            <div className='footer--bottom-wrapper'>
                <SocialMedia></SocialMedia>
                <p className='copy-right' dir='ltr'>Copyright © 2022 — iLanding HTML Template.</p>
            </div>
        </footer>
    )
}