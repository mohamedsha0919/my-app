import React from 'react';
import border from '../images/border_1.png';

export default function Copyright(){
    return(
    <div id='Copyright'>
        <img src={border} className='border--img--4' alt=''/>
        <div className='row container-fluid'>
            <div className='col-12 col-lg-6 col-md-6 col-sm-6 Copyright--col--1'>
                <h1 className='news--letter'>Subscribe To Our Newsletter.</h1>
                <input type="text" className='news--letter--input'></input>
                <button className='btn news--letter--btn'>Submit</button>
            </div>
            <div className='col-12 col-lg-6 col-md-6 col-sm-6 Copyright--col--2'>
                <p className='copyright--text--1'>2022 Gentlemens Clubs, All rights reserved.</p>
                <p className='copyright--text--2'>Developed By MohamedSha.<br/>mohamedsha0919@gmail.com</p>
            </div>
        </div>
    </div>
    );
}