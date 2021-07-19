import React, {useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css'

export default function Contact(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    let handleSubmit = event => {
        event.preventDefault()
        let mailKey = process.env.REACT_APP_EMAILJS_KEY
        emailjs.sendForm('portfolio', 'contact-form', event.target, mailKey)
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
}