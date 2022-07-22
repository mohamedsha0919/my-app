import React from 'react';
import images from '../images/shave-removebg-preview.png';
import Logo from '../images/logo.png';





export default function About(){
  return(
<div className="container-fluid" id='Who-we-are'>
			<div className="row">
				<div className="col-12 col-lg-3 col-md-3 col-sm-3 about--image">
					<img className='brush--img' src={images} alt=''></img>
				</div>
				<div className="col-12 col-lg-9 col-md-9 col-sm-9 justify-content-center text-center">
					<img className="about--image--1 align-center" src={Logo} alt=''></img>
					<h1 className="about--text">gentlemen barber <span>clubs</span></h1>
					<p className="about--text--1 text-center">Gentlemen Barber Clubs entstand aus der Idee, dass es<br/> keinen Rückzugsort für Herren gab. Vier Jahre lang befragte<br/> Elmar Heilf seine Kunden und plante den seit Mai 2015 <br/>eröffneten Barbershop in Köln.<br/><br/>
						Gentlemen Barber Clubs ist der mit Abstand letzte<br/> Rückszugsort für Männer jeden Alters. Auch Kunden die keine<br/> Dienstleistung beziehen sind jederzeit willkommen sich <br/>eine Auszeit vom Alltag zu nehmen.<br/><br/>
					Preise telefonisch, auf Anfrage oder vor Ort.</p>
					<button className="btn btn-outline-warning about--button">Read More!</button>	
				</div>
			</div>
			
		</div>
  );
}