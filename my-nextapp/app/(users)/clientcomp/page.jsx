'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [count, setCount] = useState(10) ;

  const fetchData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        <h1>Client Compoenent: {count}</h1>

        <button 
            className='bg-amber-300 p-4 text-black'
            onClick={() => setCount((prev) => prev+1
        )}>
            Click Me
        </button>
    </div>
  )
}

export default page
