import React from 'react'


const Ads = () => {
    return (
        <div className='w-full bg-[#1A1A40] py-16 px-4 text-white'>
            <div className='max-w-[1240px mx-auto grid md:grid-cols-2'>
                <div className='flex text-center justify-center text-2xl text-white'>
                    <ul>
                        <li className='mt-20 mb-12'>Better User Experience</li>
                        <li className='my-12'>Better Branding and Marketing Efforts</li>
                        <li className='mt-12 mb-20'>Better Tracking and Analytics</li>
                        <h1 className='text-indigo-300 text-bold text-7xl my-4'>What We Do For?</h1>
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-[500px] mx-auto my-6' src='/shorten.png' alt='/' /></div>
            </div>
        </div>
    )
}

export default Ads;