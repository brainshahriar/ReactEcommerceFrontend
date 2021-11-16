import React, { Component, Fragment } from 'react'
import FooterDekstop from '../components/common/FooterDekstop'
import NavMenuDekstop from '../components/common/NavMenuDekstop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterMobile from '../components/common/FooterMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NewArrival from '../components/home/NewArrival'
import AppURL from '../api/AppURL'
import axios from 'axios'

class HomePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
        this.GetVisitorDetsils();
   }
   GetVisitorDetsils=()=>{
    axios.get(AppURL.VisitorDetails).then().catch()
   }
    render() {
        return (
            <Fragment>
      
                <div className="Desktop">
               <NavMenuDekstop />
               <HomeTop />
                    </div>

                    <div className="Mobile">
                    <NavMenuMobile />  
                    <HomeTopMobile />
                    </div> 


                    <FeaturedProducts />
                    <NewArrival />
                    <Categories />
                    <Collection />
                    <div className="Desktop">
                    <FooterDekstop />
                    </div>

                    <div className="Mobile">
                    <FooterMobile/>
                    </div>
            </Fragment>
        )
    }
}

export default HomePage
