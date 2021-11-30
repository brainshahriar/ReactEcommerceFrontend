import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDekstop from '../components/common/FooterDekstop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDekstop from '../components/common/NavMenuDekstop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import axios from 'axios'
import SliderLoading from '../components/PlaceHolder/SliderLoading'

class ProductDetailsPage extends Component {

     constructor({match}){
          super(); 
          this.state={
               code:match.params.code,
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none" 
          }
     }

     componentDidMount(){
          window.scroll(0,0)

          axios.get(AppURL.ProductDetails(this.state.code)).then(response =>{
               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:""});         

          }).catch(error=>{

          });
     }

     render() {
          const User = this.props.user;

          if(this.state.mainDiv == "d-none"){ 

               return (
                    <Fragment> 
                    <div className="Desktop">
                     <NavMenuDekstop /> 
                    </div>
     
                    <div className="Mobile">
                    <NavMenuMobile />  
                    </div>                       
     
                     <SliderLoading isLoading={this.state.isLoading} />
                    
                    
                    <div className="Desktop">
                    <FooterDekstop/>
                    </div>
     
                    <div className="Mobile">
                    <FooterMobile/>
                    </div>
                    
               </Fragment>
               )


          }else{


               return (
                    <Fragment> 
                    <div className="Desktop">
                     <NavMenuDekstop /> 
                    </div>
     
                    <div className="Mobile">
                    <NavMenuMobile />  
                    </div>                       
     
                    <ProductDetails data={this.state.ProductData} user={User} /> 
                 
                    
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
}

export default ProductDetailsPage