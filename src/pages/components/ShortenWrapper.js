import React, { useEffect, useState } from 'react'
import ShortenInput from './ShortenInput'
import ShortenForm from './ShortenForm'
import { v4 as uuidv4 } from 'uuid';

const ShortenWrapper = () => {

    const [input, setInput] = useState([])

    useEffect(() => {
        const savedUrls = JSON.parse(localStorage.getItem('urls')) || [];
        setInput(savedUrls);
    }, []);

    const addUrl = (url) => {
        const newUrls = [
            ...input,
            { id: uuidv4(), longUrl: url.longUrl, shortUrl: url.shortUrl }];
        setInput(newUrls)
        console.log("input", input);
        localStorage.setItem('urls', JSON.stringify(newUrls))
    }

    const handleCopy = async (shortUrl) => {
        try {
            await navigator.clipboard.writeText(shortUrl)
            console.log("Copy success");
        } catch (error) {
            console.log("Failed to copy shortUrl:", error);
        }
    }

    const handleDelete = (id) => {
        const newUrls = input.filter(url => url.id !== id)
        setInput(newUrls)
        localStorage.setItem('urls', JSON.stringify(newUrls))
    }


    return (
        <div className='ShortenWrapper'>
            <ShortenInput addUrl={addUrl} />
            {input.map((url) => (
                <ShortenForm
                    input={url}
                    key={url.id}
                    onCopy={handleCopy}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default ShortenWrapper