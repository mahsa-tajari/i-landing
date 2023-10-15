import './our-services.css'
import ServicesBox from '../servicesBox/servicesBox'
import Title from '../title/title'
export default function OurServices(){
    const servicesBoxData =[
        {title: "سئو فرندلی", iconSrc: "./images/ourServices/searchIcon.svg"},
        {title: "طراحی ریسپانسیو",iconSrc: "./images/ourServices/cadrIcon.svg"},
        {title: "سرعت بالا در لودینگ", iconSrc: "./images/ourServices/speedIcon.svg"},
        {title:"کدنویسی تمیز و بهینه" ,iconSrc:"./images/ourServices/codeIcon.svg"},
        {title:"جذب مشتری بالقوه", iconSrc:"./images/ourServices/customerIcon.svg"},
        {title: "افزایش نرخ تبدیل", iconSrc: "./images/ourServices/arrowIcon.svg"}
    ]

    return(
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
    )
}