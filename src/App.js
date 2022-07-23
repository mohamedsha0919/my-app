import React from 'react';
import Navbar from './component/Navbar';
import Main from './component/Main';
import About from './component/About';
import Blogs from './component/Blogs';
import Aboutus from './component/Aboutus';
import Services from './component/Services';
import Appointments from './component/Appointment';
import Pricing from './component/Pricing';
import Contacts from './component/Contacts';
import Copyright from './component/Copyright';
import './App.css';
import './media.css';


function App() {
  return(
    <>
      <Navbar/>
      <Main/>
      <About/>  
      <Blogs/>
      <Aboutus/>
      <Services/>
      <Appointments/>
      <Pricing haircutprice_1 = "$18" haircutprice_2 = "$30" haircutprice_3 = "$35"
       shaveprice_1 = "$30" shaveprice_2 = "$40"
       beardprice_1 = "$18" beardprice_2 = "$24" beardprice_3 = "$40"
      />
      <Contacts/>
      <Copyright/>
    </>
  );
}

export default App;
