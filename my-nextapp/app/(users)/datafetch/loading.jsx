import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <div className=''>
            <h1>Loading</h1>
            <Image
                src="/file.svg"
                width={200}
                height={200}
                alt="Loading animation"
            />
        </div>
    )
}

export default loading