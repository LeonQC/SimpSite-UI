import React, { useState } from 'react'

const ShortenInput = ({ addUrl }) => {
    const [value, setValue] = useState("")
    const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${API_BASE_URL}/encode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: value,
        });

        if (response.ok) {
            const shortUrl = await response.text();
            addUrl({ id: shortUrl, longUrl: value, shortUrl: shortUrl })
            setValue("")
        } else {
            console.log("Failed to shorten URL")
        }


    }

    return (
        <div>
            <form className='ShortenForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='Shorten-input'
                    placeholder='Enter URL here ...'
                    value={value}
                    onChange={e => setValue(e.target.value)} />
                <button type='submit' className='Shorten-btn'>Submit</button>
            </form>
        </div>
    )
}

export default ShortenInput