import './main.css'
import Companies from '../companies/companies'
import Advantages from '../advantages/advantages'
import OurServices from '../our-services/our-services'
import Plans from '../plans/plans'
import Questions from '../questions/questions'
import Achievements from '../achievements/achievements'
import Comments from '../comments/comments'
import AboutUs from '../about-us/aboutUs'
import Portfollio from '../portfolio/portfolio'
import Buy from '../buy/buy'
import Contact from '../contact-us/contact'
import Footer from '../footer/footer'
function Main() {
    return(
        <main>
            <Companies></Companies>
            <Advantages></Advantages>
            <OurServices></OurServices>
            <Plans></Plans>
            <Questions></Questions>
            <Achievements></Achievements>
            <Comments></Comments>
            <AboutUs></AboutUs>
            <Portfollio></Portfollio>
            <Buy></Buy>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    )
}
export default Main