import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import budgetTracker from '../../../images/budget.png'
import ecommerce from '../../../images/ecommerce.png'
import impulse from '../../../images/impulse.jpg'
import sweatmate from '../../../images/sweatmate.jpg'
import techBlog from '../../../images/tech-blog.jpg'
import workoutTracker from '../../../images/workout-tracker.jpg'
import './style.css'

export default function Portfolio(props) {
    return (
        <div className='content' id='portfolio'>
            <p>Here are some examples of the work that I have done:</p>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                <a className='projectCard' href='https://bdjm94.github.io/Project1-Impulse/' target='_blank' rel='noreferrer'>
                    <div>
                        <img src={impulse} alt='Impulse' />
                        <div className='card-title'>Impulse</div>
                        <p>Impulse is a collaborative project that was built to help those impulsive decisions. Find events and restaurants that's perfect for the occasion!
                        <br />
                        Makes use of WebAPIs (Ticketmaster and Zomato), Bootstrap, JavaScript and HTML</p>
                    </div>
                </a>
            </Carousel>
        </div>
    )
}