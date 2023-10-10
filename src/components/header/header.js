import './header.css'
import Nav from '../Nav/Nav'
export default function Header(){
    return(
        <header>
            <Nav></Nav>
            <section className='heaader-wrapper'>
                <div className='header-description'>
                    <h1><span className='green'>آی لندینگ</span>، لندینگ پیجی برای جذب افراد جدید!
                    </h1>
                    <p className='header-text'>آی لندینگ یک قالب HTML لندینگ پیج هستش که هدفش جذب کاربرانی که برای اولین بار با شما آشنا میشن. یک لندینگ پیج خوب نرخ تبدیل کلیک به پول شما رو زیاد میکنه!</p>
                    <div className='header-links-wrapper'>
                        <a className='header-link header-link-primary' href="#">خرید قالب</a>
                        <a className='header-link' href="#">پیش نمایش زنده</a>
                    </div>
                </div>
                <div className='header-img-wrapper'>
                    <img className='header-img' src="./images/header/iphone-mockup-standing.png" alt="mobile" />
                </div>
                <div className='header-svg-wrapper'>
                    <div className='bg-light'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill='#F9FAFB'></path>
                    </svg>
                </div>
            </section>
        </header>
    )
}