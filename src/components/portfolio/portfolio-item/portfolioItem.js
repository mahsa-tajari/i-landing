import {AiOutlineEye} from 'react-icons/ai'
export default function PortfolioItem({title,imgSrc}){
    return(
        <div className='portfolio-Item'>
            <div className='portfolio-item--img-wrapper'>
                <img src={imgSrc} alt="portfolio image" />
                <div className='portfoplio-item-title'>
                    <h3>{title}</h3>
                    <AiOutlineEye className='portfolio-item--icon' />
                </div>
            </div>
        </div>
    )
}