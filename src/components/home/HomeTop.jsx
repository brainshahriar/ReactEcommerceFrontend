import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class HomeTop extends Component {
     constructor(){
          super();
          this.state ={
               MenuData:[],
               loaderDiv:"",
               mainDiv:"d-none"
          }
     }

     componentDidMount(){
          axios.get(AppURL.AllCategoryDetails).then(response =>{ 
                this.setState({MenuData:response.data,loaderDiv:"d-none",mainDiv:""});

          }).catch(error=>{

          });
     }

     render() {
          return (
               <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row>
                              <Col lg={3} md={3} sm={12}>
                              <div className={this.state.loaderDiv}>
 <div class="ph-item">
    <div class="ph-col-12">
        <div class="ph-row">

            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
</div>   
  
     </div>
     <div className={this.state.mainDiv}>
     <MegaMenu data={this.state.MenuData}/>
          </div>
            
                              </Col>
                              <Col lg={9} md={9} sm={12}>
                              <HomeSlider />
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default HomeTop