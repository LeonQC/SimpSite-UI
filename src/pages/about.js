import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';



function About() {
    const [message, setMessage] = useState('');
    const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

    useEffect(() => {
        fetch(`${API_BASE_URL}/hello`)
            .then(response => response.text())
            .then(data => {
                setMessage(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [API_BASE_URL]);

    return (
        <div>
            <Navbar />
            <Typography variant='h1' fontWeight='bold'>{message}hello</Typography>
        </div>
    );
}

export default About;
