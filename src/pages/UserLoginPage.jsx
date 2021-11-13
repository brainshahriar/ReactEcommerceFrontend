import React, { Component, Fragment } from 'react'
import FooterDekstop from '../components/common/FooterDekstop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDekstop from '../components/common/NavMenuDekstop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'


class UserLoginPage extends Component {
     render() {
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDekstop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <UserLogin /> 

               <div className="Desktop">
               <FooterDekstop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

export default UserLoginPage