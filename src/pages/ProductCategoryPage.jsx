import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDekstop from '../components/common/FooterDekstop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDekstop from '../components/common/NavMenuDekstop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'

 class ProductCategoryPage extends Component {

     constructor({match}){
          super();
          this.state={
               Category:match.params.category,
               ProductData:[] 
          }
     }

     componentDidMount(){
          window.scroll(0,0)
          // alert(this.state.Category);
          axios.get(AppURL.ProductListByCategory(this.state.Category)).then(response =>{

               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });

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

               <Category Category={this.state.Category} ProductData={this.state.ProductData} /> 

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

export default ProductCategoryPage