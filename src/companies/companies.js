import './companies.css'

function Companies() {
    return(
        <section id='companies'>
            <h2>« شرکت هایی که به آی لندینگ اعتماد کردند »</h2>
            <div className='companies-logos-wrapper'>
                <div className="companiy-logo-wrapper"><img src="./company1.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="./company2.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="./company3.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="./company4.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="./company5.png" alt="company-logo" /></div>
            </div>
        </section>
    )
}
export default Companies