import React, { Component } from 'react'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class MegaMenuAll extends Component {
     constructor(){
          super();
          this.state ={
               MenuData:[]
          }
     }

     componentDidMount(){
          axios.get(AppURL.AllCategoryDetails).then(response =>{ 
               this.setState({MenuData:response.data});

         }).catch(error=>{

     });
}

MenuItemClick=(event)=>{
     event.target.classList.toggle("active");
     var panel = event.target.nextElementSibling;
     if(panel.style.maxHeight){
          panel.style.maxHeight = null;
     }else{
          panel.style.maxHeight= panel.scrollHeight+ "px"
     }


     render() {
          return (
                <div className="accordionMenuDivAll">
                   <div className="accordionMenuDivInsideAll">


           <button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>

<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>



<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>



<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>



<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>









                   </div>

              </div>
          )
     }
}

export default MegaMenuAll