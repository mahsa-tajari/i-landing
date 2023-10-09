import './servicesBox.css'

function ServicesBox({iconSrc,title}) {
    return(
        <div className='box-wrapper'>
            <div className='box-icon-wrapper'>
                <img src={iconSrc} alt="icon" />
            </div>
           <div className='box-desc-wrapper'>
                <h2 className='box-title'>{title}</h2>
                <p className='box-desc'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
           </div>
        </div>
    )
}
export default ServicesBox