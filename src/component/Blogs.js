import React from 'react';
import border from '../images/border_1.png';
import images from '../images/Best+barbershop.jpg';
import images_1 from '../images/hair+braiding.jpg';
import images_2 from '../images/top+notch+barbershop.jpg';
import images_3 from '../images/shutterstock_704589289.jpg';
import images_4 from '../images/best+barber+techniques.jpg';
import images_5 from '../images/barber-shop-5225309_1920.jpg';



export default function blogs(){
  return(
    <div className="blogs--container" id="blogs">
		<img src={border} className='border--img--1' alt=''/>
			<h1 className="blogs--text">blogs</h1>
			<p className="blogs--text--1">Gentlemens clubs co. breaks down all the latest trends, styles, tips, and tricks for anyone who is looking to just learn a little more.<br/> Keep up with Regal Barber Co and stay looking at the top of your game.</p>
			<div className="container">
				<div className="row mt-5">
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card bg-transparent border-0">
							<img src={images} className="card-img-top img--1 p-2" alt=''/>
							<div className="card-body">
								<h5 className="card-title text-light">BEST BARBERSHOP IN THE COUNTRY</h5>
								<p className="card-text text-light">With the thousands of the barbershops all over the country, I have taken a look at the top eight so that you can narrow down your search for nearby barbershops.</p>
								<button className="btn btn-outline-light">Learn more</button>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card bg-transparent border-0">
							<img src={images_1} className="card-img-top p-2" alt=''/>
							<div className="card-body">
								<h5 className="card-title text-light">REGAL BARBER'S HAIR BRAIDING BARBERSHOP</h5>
								<p className="card-text text-light
								">Whether we admit it or not, we know that we only want the best hands to touch and style our hair. When a barber shop has well-experienced professional barbers, we know that our hair will be in good hands and will lead to an amazing look.</p>
								<button className="btn btn-outline-light">Learn more</button>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card bg-transparent border-0">
							<img src={images_2} className="card-img-top p-2" alt=''/>
							<div className="card-body">
								<h5 className="card-title text-light">HOW TO FIND A TOP NOTCH BARBERSHOP</h5>
								<p className="card-text text-light">When looking for a barber shop, there should be more than barbershops close to your location on your list. Here are some factors to consider</p>
								<button className="btn btn-outline-light">Learn more</button>
							</div>
						</div>
					</div>
				</div>
				{/*--------------------Blog-2----------------------*/}
				<div className="row mt-5">
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card bg-transparent border-0">
							<img src={images_3} className="card-img-top p-2" alt=''/>
							<div className="card-body">
								<h5 className="card-title text-light">BEST BARBER TECHNIQUES FOR MEN</h5>
								<p className="card-text text-light">"Men these days are being ever more conscious and keen when it comes to their appearance, especially with their haircuts, so it is vital to find the best barber, one that knows exactly how to give you the cut you need every single time. "</p>
								<button className="btn btn-outline-light">Learn more</button>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card bg-transparent border-0">
							<img src={images_4} className="card-img-top p-2" alt=''/>
							<div className="card-body">
								<h5 className="card-title text-light">THE BEST MEN'S HAIR DESIGN TREND TODAY!</h5>
								<p className="card-text text-light
								">"It is indeed appealing to get a new haircut with a design that will make you look great and unique. Thus, to arrive at the result you are looking for, you need to consider a few things before heading over to the closest barber near you."</p>
								<button className="btn btn-outline-light">Learn more</button>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card bg-transparent border-0">
							<img src={images_5} className="card-img-top p-2" alt=''/>
							<div className="card-body">
								<h5 className="card-title text-light">WHERE TO GET A FADE HAIRCUT</h5>
								<p className="card-text text-light">"Regal Barber Co. has you covered! This type of haircut requires next-level barbering skills to arrive at a sharp and seamless finish. The barbers at Regal Barber Co. are trained to make sure that you leave looking fresh as possible."</p>
								<button className="btn btn-outline-light">Learn more</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
        }