// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from '../assets/images/zauca-website-design.png'
const AppHeader = () =>{
  return<div className='header'>
    <img src={image} alt='company-name'/>
    <h1 className="company-name">ZAUCA PRIVATE LTD.</h1>
  </div>
}

export default AppHeader;
