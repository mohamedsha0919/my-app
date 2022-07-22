import React from 'react';
import logo from '../images/logo.png';

export default function Navbar(){
  return(
    <>
<nav className="navbar navbar-expand-lg bg-light">
			<a className="navbar-brand" href="#home"><img className="logo" src={logo} alt='none'/></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#Who-we-are">Why Us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#blogs">Blogs</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about--us">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#services">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#Pricing">Pricing</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#Contacts">Contacts</a>
					</li>
				</ul>
			</div>
		</nav>
    </>
  );
  
}
   