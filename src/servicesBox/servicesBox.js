import './servicesBox.css'

function ServicesBox(props) {
    return(
        <div className='box-wrapper'>
            <div className='box-icon-wrapper'>
                <img src={props.iconSrc} alt="icon" />
            </div>
           <div className='box-desc-wrapper'>
                <h2 className='box-title'>{props.title}</h2>
                <p className='box-desc'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
           </div>
        </div>
    )
}
export default ServicesBox