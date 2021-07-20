import React, { useEffect, useState } from 'react';
import './style.css';

export default function Content (props) {
    const [content, setContent] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setContent(props.children)
        }, 500);
        //to cancel the setTimeout listener when the component is unmounted
        return () => clearTimeout(timerId);
    }, [])

    return (
        content
    )
}