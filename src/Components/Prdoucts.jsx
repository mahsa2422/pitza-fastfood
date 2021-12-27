import React from 'react';
import './index.css';
import PorductBox from './PorductBox';
import pimage1 from '../image/s1.png';
import pimage2 from '../image/s2.png';

const Prdoucts =()=>{
    return(
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maxime repellat</p>
            <div className="a-container">
                <PorductBox image={pimage1} title={"Luger Burger"}/>
                <PorductBox image={pimage2} title={"Luger Burger"}/>
                <PorductBox image={pimage1} title={"Luger Burger"}/>
                <PorductBox image={pimage2} title={"Luger Burger"}/>
                
            </div>
        </div>
        
    );
}
export default Prdoucts;