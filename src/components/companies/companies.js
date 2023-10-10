import './companies.css'

function Companies() {
    return(
        <section id='companies'>
            <h2>« شرکت هایی که به آی لندینگ اعتماد کردند »</h2>
            <div className='companies-logos-wrapper'>
                <div className="companiy-logo-wrapper"><img src="../images/companies/company1.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="../images/companies/company2.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="../images/companies/company3.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="../images/companies/company4.png" alt="company-logo" /></div>
                <div className="companiy-logo-wrapper"><img src="../images/companies/company5.png" alt="company-logo" /></div>
            </div>
        </section>
    )
}
export default Companies