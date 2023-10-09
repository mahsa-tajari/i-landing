import './main.css'
import Companies from '../companies/companies'
import BodyItem from '../bodyItem/bodyItem'
import ServicesBox from '../servicesBox/servicesBox'
import Title from '../title/title'
import Cart from '../cart/cart'
function Main() {
    return(
    <main>
        <Companies></Companies>
        <div className='body-wrapper'>
            <BodyItem shortTitle="طراحی Mobile-first" imgSrc="./picture1.svg" direction="right" theme="default" title="ریسپانسیو برای تمامی دستگاه ها"></BodyItem>
            <BodyItem shortTitle="آناتومیِ استاندارد" imgSrc="./picture2.svg" direction="left" theme="blue-theme" title="طراحی و توسعه با رعایت اصول جهانی"></BodyItem>
            <BodyItem shortTitle="رشد کسب و کار" imgSrc="./picture3.svg" direction="right" theme="default" title="تبدیل بازدید کننده ساده به مشتری!"></BodyItem>
        </div>
        <section className='our-services'>
            <Title title="امکانات ما"></Title>
            <div className='services-boxes-wrapper'>
                <ServicesBox title="سئو فرندلی" iconSrc="./searchIcon.svg"></ServicesBox>
                <ServicesBox title="طراحی ریسپانسیو" iconSrc="./cadrIcon.svg"></ServicesBox>
                <ServicesBox title="سرعت بالا در لودینگ" iconSrc="./speedIcon.svg"></ServicesBox>
                <ServicesBox title="کدنویسی تمیز و بهینه" iconSrc="./codeIcon.svg"></ServicesBox>
                <ServicesBox title="جذب مشتری بالقوه" iconSrc="./customerIcon.svg"></ServicesBox>
                <ServicesBox title="افزایش نرخ تبدیل" iconSrc="./arrowIcon.svg"></ServicesBox>
            </div>
        </section>
        <section className='plans'>
            <Title title="پلن‌های ما"></Title>
            <div className='plans-wrapper'>
                <Cart planName="ساده" price="99" yearlyPrice="1 میلیون " liValue="اول" style="normal"></Cart>
                <Cart planName="حرفه‌ای" price="199" yearlyPrice="2 میلیون " style="active"></Cart>
                <Cart planName="نامحدود" price="399" yearlyPrice="4 میلیون " style="normal"></Cart>
            </div>
        </section>
    </main>
    )
}
export default Main