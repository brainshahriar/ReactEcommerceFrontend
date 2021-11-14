import React, { Component, Fragment } from 'react'
import FooterDekstop from '../components/common/FooterDekstop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDekstop from '../components/common/NavMenuDekstop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Privacy from '../components/others/Privacy'

class PrivacyPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
     }
     render() {
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDekstop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <Privacy /> 

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

export default PrivacyPage