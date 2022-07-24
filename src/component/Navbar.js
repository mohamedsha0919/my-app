import React from 'react';
import logo from '../images/logo.png';

export default function Navbar(){
	return(
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home"><img src={logo} className="logo" alt=''/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Who-we-are">Why Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#blogs">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about--us">About</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#Pricing">Pricing</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#Contacts">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}