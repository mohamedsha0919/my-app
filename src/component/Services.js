import React from 'react';
import images from '../images/head.svg';
import images_1 from '../images/haircut.svg';
import images_2 from '../images/chair.svg';
import images_3 from '../images/mustag.png';
import images_4 from '../images/towel.png';
import images_5 from '../images/brush.png';


export default function Services(){
    return(
        <section id="services" className='container-fluid'>
			<div className="services--class">
				<h2 className="services--text text-center">our services</h2>
				<p className="services--text--1 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididuntLorem ipsum <br/>dolor sit amet, consectetur adipisicing elit.</p>
			</div>
            
				<div className="row justify-content-around m-5">
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card">
							<div className="card-body">
								<img src={images} className='card--img' alt=''/>
								<h5 className="card-title-1">Haircuts</h5>
								<p className="card-text">With the thousands of the barbershops all over the country, I have taken a look at the top eight so that you search  and you can that very for nearby barbershops.</p>
							</div>
						</div>
					</div>
			<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card">
							<div className="card-body">
							<img src={images_1} className='card--img' alt=''/>
								<h5 className="card-title-1">HAIRCUT & BEARD TRIM</h5>
								<p className="card-text">With the thousands of the barbershops all over the country, I have taken a look at the top eight so thath ghgg said thsat your search for nearby barbershops.</p>
							</div>
						</div>
					</div>	
			<div class="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card">
							<div className="card-body">
							<img src={images_2} className='card--img' alt=''/>
								<h5 className="card-title-1">BUZZCUT</h5>
								<p className="card-text">With the thousands of the barbershops all over the country, I have taken a look at the top eight so that you can narrow down your search for nearby barbershops.</p>
							</div>
						</div>
					</div>			
                </div>
				{/*--------------------------------------------*/}
				<div className="row justify-content-around m-5">
					<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card">
							<div className="card-body">
								<img src={images_3} className='card--img' alt=''/>
								<h5 className="card-title-1">BEARD TRIM & SHAPE UP</h5>
								<p className="card-text">With the thousands of the barbershops all over the country, I have taken a look at the top eight so that you search  and you can that very for nearby barbershops.</p>
							</div>
						</div>
					</div>
			<div className="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card">
							<div className="card-body">
							<img src={images_4} className='card--img' alt=''/>
								<h5 className="card-title-1">DELUXE SERVICE</h5>
								<p className="card-text">With the thousands of the barbershops all over the country, I have taken a look at the top eight so thath ghgg said thsat your search for nearby barbershops.</p>
							</div>
						</div>
					</div>	
			<div class="col-12 col-lg-4 col-md-4 col-sm-4">
						<div className="card">
							<div className="card-body">
							<img src={images_5} className='card--img' alt=''/>
								<h5 className="card-title-1">HOT TOWEL SHAVE</h5>
								<p className="card-text">With the thousands of the barbershops all over the country, I have taken a look at the top eight so that you can narrow down your search for nearby barbershops.</p>
							</div>
						</div>
					</div>			
                </div>
		    </section>
        );
    }