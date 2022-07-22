import React from 'react';
import border from '../images/border_1.png';

export default function Copyright(){
    return(
    <div id='Copyright'>
        <img src={border} className='border--img--4' alt=''/>
        <div className='row container-fluid'>
            <p className='copyright--text--1'>©2022 Gentlemens Clubs, All rights reserved.</p>
            <p className='copyright--text--2'>Developed By MohamedSha.<br/>mohamedsha0919@gmail.com</p>
        </div>
    </div>
    );
}