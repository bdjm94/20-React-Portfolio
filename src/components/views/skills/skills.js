import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactWordCloud from 'react-wordcloud';
import './style.css';
import languages from './languages';

export default function Skills(props) {
    const options = {
        colors: ['#ffffff', '#535353', '#8f8f8f'],
        enableOptimizations: true,
        fontFamily: 'impact',
        fontSizes: [20, 60],
        rotations: 1,
        rotationAngles: [0, 90],
    };

    return (
        <div className='content' id='skills'>
            <p>See below for the skills and languages that I have learnt!</p>
            <ReactWordCloud
            words={languages}
            options={options}
            />
        </div>
    )
}