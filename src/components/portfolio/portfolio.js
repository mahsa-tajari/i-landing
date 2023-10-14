import './portfolio.css'
import Title from '../title/title'
import PortfolioItem from './portfolio-item/portfolioItem'
export default function Portfollio(){
    const portfolioDatas = [
        {title:'نمونه کار اول',imgSrc: './images/portfolio/1.jpg'},
        {title:'نمونه کار دوم',imgSrc: './images/portfolio/2.jpg'},
        {title:'نمونه کار سوم',imgSrc: './images/portfolio/3.jpg'}
    ]
    return(
        <section className='portfolio'>
            <Title title={'آخرین نمونه کارها'}></Title>
            <div className='portfolio-items-wrapper'>
                <PortfolioItem {...portfolioDatas[1]}></PortfolioItem>
                <PortfolioItem {...portfolioDatas[2]}></PortfolioItem>
                <PortfolioItem {...portfolioDatas[0]}></PortfolioItem>
            </div>
        </section>
    )

}