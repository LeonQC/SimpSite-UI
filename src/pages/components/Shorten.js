import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShortenForm from './ShortenForm';
import ShortenWrapper from './ShortenWrapper';

const Shorten = () => {
    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        encodeURI(longUrl, setShortUrl)
    }

    return (
        <div className='w-full text-center bg-zinc-800' >
            <form className='ShortenForm'>
                <SearchIcon sx={{ color: '#c5cae9' }} />

                <input
                    type='text'
                    className='Shorten-input'
                    placeholder='Enter URL here ...'
                    value={longUrl}
                    onChange={e => setLongUrl(e.target.value)} />
                <button type='submit' className='Shorten-btn'>Submit</button>
            </form>

            <div className='mx-20' >
                <SearchIcon sx={{ color: '#c5cae9' }} />
                <input
                    className='w-4/5 h-12 ml-4 rounded-lg my-4'
                    placeholder='   Enter your URL...'
                    type='url'
                    value={longUrl}
                    onChange={e => setLongUrl(e.target.value)}
                />
                <button
                    className='mx-4 bg-indigo-300 w-[200px] rounded-md font-bold my-6 py-3 text-black'
                    onClick={handleSubmit}
                >
                    Shorten
                </button>
                {shortUrl && (
                    <div className='py-5 px-8 sm:py-5'>
                        <div className='bg-white ml-2 border-4 rounded-lg flex'>
                            <p className='h-10 w-2/3'>Original Url:
                                {longUrl}</p>
                            <p className='h-10 w-1/3'>Short Url: <a href={longUrl}>{shortUrl}</a> </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shorten