import './cart.css'
export default function Cart({style,planName,price,yearlyPrice}){
    return(
        <div className='cart-wrapper' id={style}>
            <div className='cart-plan-name'>
                <h3>{planName}</h3>
            </div>
            <div className='cart-prices-wrapper'>
                <span className='cart-price'>{price}</span>
                <div className='monthly-price-wrapper'>
                    <span> هزارتـومـان</span> <span className='date-plan'>ماهیانه </span>
                </div>
            </div>
            <div className='yearly-price'>
                <p>
                    <span>{yearlyPrice}</span>
                    تومان سالیانه
                </p>
            </div>
            <div className='ul-wrapper'>
                <ul className='cart-plans-wrapper'>
                    <li>لورم ایپسوم اول</li>
                    <li>لورم ایپسوم دوم</li>
                    <li>لورم ایپسوم سوم</li>
                    <li>لورم ایپسوم چهارم</li>
                    <li>لورم ایپسوم پنجم</li>
                </ul>
            </div>
            <a className='cart-link' href="#">ثبت سفارش</a>
        </div>
    )
}