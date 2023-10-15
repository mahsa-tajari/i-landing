import './main.css'
import Companies from '../companies/companies'
import BodyItem from '../bodyItem/bodyItem'
import Title from '../title/title'
import OurServices from '../our-services/our-services'
import Cart from '../cart/cart'
import Questions from '../questions/questions'
import Achievements from '../achievements/achievements'
import Comments from '../comments/comments'
import AboutUs from '../about-us/aboutUs'
import Portfollio from '../portfolio/portfolio'
import Buy from '../buy/buy'
import Contact from '../contact-us/contact'
import Footer from '../footer/footer'
function Main() {
    const bodyItemDta = [
        {shortTitle: 'طراحی Mobile-first',imgSrc: './images/main/picture1.svg', direction: 'right', theme: 'default',title: 'ریسپانسیو برای تمامی دستگاه ها'},
        {shortTitle: 'آناتومیِ استاندارد',imgSrc:'./images/main/picture2.svg',direction:'left', theme: 'blue-theme', title: 'طراحی و توسعه با رعایت اصول جهانی'},
        {shortTitle: 'رشد کسب و کار',imgSrc:'./images/main/picture3.svg',direction:'right', theme: 'default', title: 'تبدیل بازدید کننده ساده به مشتری!'},
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
            <OurServices></OurServices>
            <section className='plans'>
            <Title title="پلن‌های ما"></Title>
            <div className='plans-wrapper'>
                <Cart {...cartData[0]}></Cart>
                <Cart {...cartData[1]}></Cart>
                <Cart {...cartData[2]}></Cart>
            </div>
            </section>
            <Questions></Questions>
            <Achievements></Achievements>
            <Comments></Comments>
            <AboutUs></AboutUs>
            <Portfollio></Portfollio>
            <Buy></Buy>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    )
}
export default Main