import './plans.css'
import Title from '../title/title'
import Cart from '../cart/cart'

export default function Plans(){
    const cartData = [
        {planName: "ساده", price: "99", yearlyPrice: "1 میلیون ", liValue: "اول", style: "normal"},
        {planName: "حرفه‌ای", price: "199", yearlyPrice: "2 میلیون ", style: "active"},
        {planName: "نامحدود",  price: "399",  yearlyPrice: "4 میلیون ",  style: "normal"}
    ]
    return(
        <section className='plans'>
            <Title title="پلن‌های ما"></Title>
            <div className='plans-wrapper'>
                <Cart {...cartData[0]}></Cart>
                <Cart {...cartData[1]}></Cart>
                <Cart {...cartData[2]}></Cart>
            </div>
        </section>

    )
}