import './advantages.css'
import BodyItem from '../bodyItem/bodyItem'

export default function Advantages(){
    const bodyItemDta = [
        {shortTitle: 'طراحی Mobile-first',imgSrc: './images/main/picture1.svg', direction: 'right', theme: 'default',title: 'ریسپانسیو برای تمامی دستگاه ها'},
        {shortTitle: 'آناتومیِ استاندارد',imgSrc:'./images/main/picture2.svg',direction:'left', theme: 'blue-theme', title: 'طراحی و توسعه با رعایت اصول جهانی'},
        {shortTitle: 'رشد کسب و کار',imgSrc:'./images/main/picture3.svg',direction:'right', theme: 'default', title: 'تبدیل بازدید کننده ساده به مشتری!'},
    ]
    return(
        <section className='advantages'>
            <BodyItem {...bodyItemDta[0]}></BodyItem>
            <BodyItem {...bodyItemDta[1]}></BodyItem>
            <BodyItem {...bodyItemDta[2]}></BodyItem>
        </section>
    )
}