import React, { Component, Fragment } from 'react'
import NavMenuDekstop from '../components/common/NavMenuDekstop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                {/* <NavMenuDekstop /> */}
                <NavMenuMobile />
                <HomeTop />
                <FeaturedProducts />
                <NewArrival />
                <Categories />
                <Collection />
            </Fragment>
        )
    }
}

export default HomePage
