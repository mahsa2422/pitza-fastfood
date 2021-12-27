import React from 'react';
import './index.css';
 const PorductBox=(props)=>{
     return(
         <div className="a-box">
             <div className="a-b-img">
                 <img src={props.image} alt=''/>

             </div>
             <div className="a-b-text">
                 <h2>{props.title}</h2>
                 <button className="productbox-button">OrderNow</button>
             </div>

         </div>
     );
 }
 export default PorductBox;