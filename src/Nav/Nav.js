import './Nav.css'
export default function Nav(){
    return(
        <nav>
            <div className="wrapper">
                <div className='logo-wrapper'><img src="./main-logo.svg" alt="i-landing logo" /></div>
                <div className='typography-wrapper'><img src="./ilanding-typography.svg" alt="i-landing typography" /></div>
            </div>
            <div className='menu-icon-wrapper'>
                <span className='menu-icon-line'></span>
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'><a href="#">خانه</a></li>
                <li className='nav-item'><a href="#">امکانات</a></li>
                <li className='nav-item'><a href="#">قیمت گذاری</a></li>
                <li className='nav-item'><a href="#">درباره</a></li>
                <li className='nav-item'><a href="#">بیشتر</a></li>
            </ul>
            <a className='nav-link' href="#">خرید قالب</a>
        </nav>
    )
}
