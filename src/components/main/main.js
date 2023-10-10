import './main.css'
import Companies from '../companies/companies'
import BodyItem from '../bodyItem/bodyItem'
import ServicesBox from '../servicesBox/servicesBox'
import Title from '../title/title'
import Cart from '../cart/cart'
import Questions from '../questions/questions'
function Main() {
    const bodyItemDta = [
        {shortTitle: 'طراحی Mobile-first',imgSrc: './images/main/picture1.svg', direction: 'right', theme: 'default',title: 'ریسپانسیو برای تمامی دستگاه ها'},
        {shortTitle: 'آناتومیِ استاندارد',imgSrc:'./images/main/picture2.svg',direction:'left', theme: 'blue-theme', title: 'طراحی و توسعه با رعایت اصول جهانی'},
        {shortTitle: 'رشد کسب و کار',imgSrc:'./images/main/picture3.svg',direction:'right', theme: 'default', title: 'تبدیل بازدید کننده ساده به مشتری!'},
    ]
    const servicesBoxData =[
        {title: "سئو فرندلی", iconSrc: "./images/ourServices/searchIcon.svg"},
        {title: "طراحی ریسپانسیو",iconSrc: "./images/ourServices/cadrIcon.svg"},
        {title: "سرعت بالا در لودینگ", iconSrc: "./images/ourServices/speedIcon.svg"},
        {title:"کدنویسی تمیز و بهینه" ,iconSrc:"./images/ourServices/codeIcon.svg"},
        {title:"جذب مشتری بالقوه", iconSrc:"./images/ourServices/customerIcon.svg"},
        {title: "افزایش نرخ تبدیل", iconSrc: "./images/ourServices/arrowIcon.svg"}
    ]
    const cartData = [
        {planName: "ساده", price: "99", yearlyPrice: "1 میلیون ", liValue: "اول", style: "normal"},
        {planName: "حرفه‌ای", price: "199", yearlyPrice: "2 میلیون ", style: "active"},
        {planName: "نامحدود",  price: "399",  yearlyPrice: "4 میلیون ",  style: "normal"}
    ]
    return(
        <main>
        <Companies></Companies>
        <div className='body-wrapper'>
            <BodyItem {...bodyItemDta[0]}></BodyItem>
            <BodyItem {...bodyItemDta[1]}></BodyItem>
            <BodyItem {...bodyItemDta[2]}></BodyItem>
        </div>
        <section className='our-services'>
            <Title title="امکانات ما"></Title>
            <div className='services-boxes-wrapper'>
                <ServicesBox {...servicesBoxData[0]}></ServicesBox>
                <ServicesBox {...servicesBoxData[1]}></ServicesBox>
                <ServicesBox {...servicesBoxData[2]}></ServicesBox>
                <ServicesBox {...servicesBoxData[3]}></ServicesBox>
                <ServicesBox {...servicesBoxData[4]}></ServicesBox>
                <ServicesBox {...servicesBoxData[5]}></ServicesBox>
            </div>
        </section>
        <section className='plans'>
            <Title title="پلن‌های ما"></Title>
            <div className='plans-wrapper'>
                <Cart {...cartData[0]}></Cart>
                <Cart {...cartData[1]}></Cart>
                <Cart {...cartData[2]}></Cart>
            </div>
        </section>
        <Questions></Questions>
        </main>
    )
}
export default Main