import React, { useState, useEffect } from 'react';
import email from '../../images/email.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './style.css';

export default function Footer(props) {
    const arr =[
        <div key='0' className='w3-animate-left'><a href='https://www.linkedin.com/in/bdjm94/' target='_blank' rel='noopener noreferrer'>
            <img className='ind-icon' alt='LinkedIn' src={linkedin} /></a></div>,
        <div key='1' className='w3-animate-left'><a href='https://github.com/bdjm94/' target='_blank' rel='noopener noreferrer'>
            <img className='ind-icon' alt='GitHub' src={github} /></a></div>,
        <div key='0' className='w3-animate-left'><a href='mailto:brendandjmoore@gmail.com' target='_blank' rel='noopener noreferrer'>
            <img className='ind-icon' alt='Email' src={email} /></a></div>
    ]
}