import './bodyItem.css'

function BodyItem({direction,imgSrc,shortTitle,title,theme}){
    return(
        <div className='body-item' id={direction}>
            <div className='body-item-img-wrapper'>
                <img src={imgSrc} alt="picture" />
            </div>
            <div className='body-item-desc'>
                <h2 className='body-item-short-title'>{shortTitle}</h2>
                <h2 className='body-item-title'>{title}</h2>
                <p className='body-item-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <a className={theme} href="#">بیشتر بدانید</a>
            </div>
        </div>
    )
}
export default BodyItem