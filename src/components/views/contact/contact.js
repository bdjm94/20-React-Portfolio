import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import resume from '../../../images/resume2.png'
import resumeDownload from '../../../images/Brendan-Resume.pdf'
import './style.css'

export default function Contact(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    let handleSubmit = event => {
        event.preventDefault()
        let mailKey = process.env.REACT_APP_EMAILJS_KEY
        emailjs.init('user_ePDbASxyPapj6GRKY1TBb')
        emailjs.sendForm('service_j4sdzh9', 'template_8jvgd1c', event.target)
        .then((result) => {
            console.log(result.text)
            setName('')
            setEmail('')
            setMessage('')
            window.alert('Your message has been received, I will get back to you soon! Thanks!')
        }, (error) => {
            console.log(`Error! ${error.text}`)
        })
    }

    return (
        <div className='content' id='contact'>
            <p>If you would like to hear from me, please drop your name, email and message below! To access my resume, click on the icon below!</p>
            <form id='contact-form' onSubmit={handleSubmit}>
                <label for='name'>{'Name: '}</label>
                <input type='text' name='name' value={name} onChange={(event) => setName(event.target.value)} />
                <label for='email'>{'Email: '}</label>
                <input type='text' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <label for='message'>{'Message: '}</label>
                <textarea type='text' name='message' value={message} onChange={(event) => setMessage(event.target.value)} />
                <input type='submit' value='submit' id='submitbtn' />
                <div className='w3-animate-left'><a href={resumeDownload} download="Brendan's Resume">
            <img className='ind-icon' alt='LinkedIn' src={resume} /></a></div>
            </form>
        </div>
    )
}