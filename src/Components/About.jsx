import React from 'react';
import aboutimage from '../image/hero.png';
import './index.css';
const Abouts=()=>{
   return(
    <div id="about">
    <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio, voluptatem non consequatur fugit dicta adipisci fugiat molestias at ipsum asperiores, minima sequi reprehenderit libero fuga velit. Exercitationem, delectus iure!</p>
        <button>Read More</button>
    </div>
    <div className="about-image">
        <img src={aboutimage} alt="about"/>

    </div>

</div>
   );

}
export default Abouts;