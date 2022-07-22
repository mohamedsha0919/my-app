import React from 'react';
import border from '../images/border_1.png';



export default function Main(){
  return(
    <>
    <div className='hero'>
        <h1 class="hero--text">gentlemen's<span> club</span></h1>
		<p class="hero--text--1">haircuts & shaves</p>
		<p class="hero--text--2">life isn't perfect<br/> <span><b>but your hair can be.</b></span></p>
		<button class="btn btn-1 btn-outline-warning" type="submit" target="_blank">Book Now!</button>
    </div>
   
    <img src={border} className='border--img' alt=''/>
    
    </> 
  );
}
   