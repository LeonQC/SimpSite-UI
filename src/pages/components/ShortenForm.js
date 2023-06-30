import React from 'react'
import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp';
import ClearIcon from '@mui/icons-material/Clear';

const ShortenForm = ({ input, onCopy, onDelete }) => {

    return (
        <div className='Shorten'>
            <div className="flex">
                <div className="flex flex-col mx-4">
                    <p className="text-base font-bold">Short URL:</p>
                    <p className="opacity-50">Your URL:</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-base font-bold">
                        <a href={input.longUrl}>{input.shortUrl}</a>
                    </p>
                    <p className="opacity-50">{input.longUrl}</p>
                </div>
            </div>
            <div className='flex mx-4 space-x-4'>
                <ContentCopySharpIcon onClick={() => onCopy(input.shortUrl)} />
                <ClearIcon onClick={() => onDelete(input.id)} />
            </div>
        </div>
    )
}

export default ShortenForm