import React from 'react';
import border from '../images/border_1.png';
import images_2 from '../images/wiskey.png';
  
export default function Pricing(props){
    return(
   <>
   <div className='Pricing' id='Pricing'>
        <img src={border} className='border--img--3' alt=''/>
        <div className='row Pricing--row'>
            <div className='col-12 col-lg-3 col-md-3 col-sm-3'>
                <img src={images_2} className='Pricing--img--1' alt=''/>
            </div>
            <div className='col-12 col-lg-3 col-md-3 col-sm-3 mt-5'>
                <h1 className='Pricing--text'>Haircuts</h1>
                <ul className='Pricing--list--group'>
                    <li className='Pricing--list'>Barbers Buzz Cut <span className='Pricing--Price'>- {props.haircutprice_1}</span></li>
                    <p className='Pricing--text--1'>Good old Buzz cut to size of Choice</p>
                    <li className='Pricing--list'>Head Shave <span className='Pricing--Price'>- {props.haircutprice_2}</span></li>
                    <p className='Pricing--text--1'>Not a hair left in sight, steamed, hot-towel and shaved to the softness of a babies bum with cologne to top it off</p>
                    <li className='Pricing--list'>Gentlemens Deluxe <span className='Pricing--Price'>- {props.haircutprice_3}</span></li>
                    <p className='Pricing--text--1'>Clipper to choice, a razor cut outline, styled and tapered</p>
                </ul>
            </div>
            <div className='col-12 col-lg-3 col-md-3 col-sm-3 mt-5'>
                <h1 className='Pricing--text'>Shaving</h1>
                <ul className='Pricing--list--group'>
                    <li className='Pricing--list'>Head Shave <span className='Pricing--Price'>- {props.shaveprice_1}</span></li>
                    <p className='Pricing--text--1'>Not a hair left in sight, steamed, hot-towel and shaved to the softness of a babies bum with cologne to top it off</p>
                    <li className='Pricing--list'>Classic Hot Lather Shave <span className='Pricing--Price'>- {props.shaveprice_2}</span></li>
                    <p className='Pricing--text--1'>Hot towel, steam, lather, razor, aftershave, beard oil, and cologne</p>
                </ul>
            </div>
            <div className='col-12 col-lg-3 col-md-3 col-sm-3 mt-5'>
                <h1 className='Pricing--text'>Beards</h1>
                <ul className='Pricing--list--group'>
                    <li className='Pricing--list'>Beard & Trim Outline <span className='Pricing--Price'>- {props.beardprice_1}</span></li>
                    <p className='Pricing--text--1'>Clipper Shaping, razor outline and beard oil</p>
                    <li className='Pricing--list'>Deluxe Beard Trim <span className='Pricing--Price'>- {props.beardprice_2}</span></li>
                    <p className='Pricing--text--1'>Hot towel, clipper, razor line up, beard oil, and after shave</p>
                    <li className='Pricing--list'>Classic hot lather Shave <span className='Pricing--Price'>- {props.beardprice_3}</span></li>
                    <p className='Pricing--text--1'>Hot towel, steam, lather, razor, after shave, beard oil and cologne</p>
                </ul>
            </div>
        </div>
   </div>
   </>     
    );
}