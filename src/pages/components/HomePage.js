import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const router = useRouter();

    const [typedText, setTypedText] = useState('')

    const handleRegister = () => {
        window.sessionStorage.removeItem('userdetails');
        router.push('/register');
    };

    useEffect(() => {
        const textArray = ['HTTP://', 'WWW.', '.COM'];
        let currentIndex = 0;

        const typeText = () => {
            setTypedText(textArray[currentIndex]);

            currentIndex++;
            if (currentIndex >= textArray.length) {
                currentIndex = 0;
            }
        };

        const interval = setInterval(typeText, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            <div className='max-w-[800px] w-full pt-28 pb-4 mx-auto text-center flex flex-col justify-center'>
                <p className='text-indigo-600 font-bold p-2'>
                    We’ve expanded!
                </p>
                <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Shorten URLs
                </h2>
                <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Generate QR Codes.
                </h2>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        And now, create
                    </p>
                    <span className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
                        {typedText}</span>
                </div>
                <button
                    className='bg-black w-[200px] rounded-md font-medium mt-20 mx-auto py-3 text-indigo-300'
                    onClick={handleRegister}
                >
                    Get Started For Free
                </button>
            </div>
        </div>
    )
}

export default HomePage