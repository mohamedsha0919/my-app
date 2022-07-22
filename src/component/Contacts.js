import React from 'react';


export default function Contacts(){
    return(
        <section id='Contacts'>
            <div className='row container-fluid contacts--row'>
               <h1 className='contacts--text'>Find Us</h1>
               <p className='contacts--text--1'>Please find below where we are located and our contact details!</p>
               <div className='col-12 col-lg-4 col-md-4 col-sm-4 mt-5'>
                    <h4 className='contacts--heading'>Address</h4>
                    <address>
                        33 Gentlemens club,
                        Vivekanadar Street,
                        Dubai Main Road,
                        Dubai.
                    </address>
                    <h4 className='contacts--heading'>Call Us</h4>
                    <p>(609) 971-1199</p>
               </div>
               <div className='col-12 col-lg-4 col-md-4 col-sm-4 mt-5'>
               <h4 className='contacts--heading'>Email</h4>
                <p>gentlemensclubs@gmail.com</p>
                <p className='contacts--email--2'>info@gentlemensclubs</p>
               <h4 className='contacts--heading'>Follow Us</h4>
               <p>Facebook  |  Instagram</p>
               </div>
               <div className='col-12 col-lg-4 col-md-4 col-sm-4 mt-3'>
                <h4 className='contacts--heading'>Hours</h4>
                <p>Monday  – 10a.m.–7p.m.</p>
                <p>Tuesday  – 10a.m.–7p.m.</p>
                <p>Wednesday  –  10a.m.–7p.m.</p>
                <p>Thursday  –  10a.m.–7p.m.</p>
                <p>Friday  –  10a.m.–7p.m.</p>
                <p>Saturday  –  10a.m.–6p.m.</p>
                <p>Sunday  – 11a.m.–6p.m.</p>
                <p>Our hours may vary due to holidays.</p>
               </div>
            </div>
        </section>
    );
}