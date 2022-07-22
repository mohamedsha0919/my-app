import React from 'react';
import border from '../images/border_1.png';
import images from '../images/barber-shop-6797998_960_720.jpg';
import images_1 from '../images/The_Barber_Salzburg_Shop_Opening_2016-274.jpg';


export default function Aboutus(){
    return(
        <section id="about--us">
			<img src={border} className='border--img--2' alt=''/>
		 <div className="row about--us">
			<div className="col-12 col-lg-7 col-md-7 col-sm-7 mt-5 about--col">
				<img className="img-1" src={images} alt=''/>
				<img className="img-2" src={images_1} alt=''/>
			</div>
			<div className="col-12 col-lg-5 col-md-5 col-sm-5 mt-4 about--col--1">
				<h2 className="about--us--text">about us</h2>
				<p className="about--us--text--1"> Gentlemens Barber Club, is known for its significant style, authenticity and great service
				 that it offers to all our clients whether they come in with a hard hat and boots or a suit and tie
				  we have all your needs covered. We are one of Vancouvers most successful classy but yet modern
				   touch shops. One thing we always do is keep a lookout for new trends that we can offer
				    and show our fascinating customers if theyre not sure about what kind of style to go for.
					 So we welcome you to come and enjoy your time at Gentlemens Club.</p>
				<h3 className="about--us--text--2">opening hour</h3>
                <h3 className='about-us--text--3'>10:00 am - 10:00 pm</h3>
				<button className="btn btn-2">About us</button>
			</div>
		</div>
		</section>
    );
}