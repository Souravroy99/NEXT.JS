'use client'

import { useEffect, useState } from "react"

const RandomJokes = () => {
  const URL = `https://official-joke-api.appspot.com/random_joke`

  const [joke, setJoke] = useState(null)
  const [showJoke, setShowJoke] = useState(false)

  const fetchRandomJoke = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setJoke(data)
    setShowJoke(false) 
  }

  useEffect(() => {
    fetchRandomJoke()
  }, [])

  if (!joke) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          😂 Random Joke
        </h1>

        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">Type:</span> {joke.type}
        </p>

        <p className="mb-4 text-lg text-gray-700">
          {joke.setup}
        </p>

        {showJoke && (
          <p className="mb-4 rounded-lg bg-green-100 p-3 text-green-800">
            {joke.punchline}
          </p>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => setShowJoke(prev => !prev)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            {showJoke ? "Hide Punchline" : "Show Punchline"}
          </button>

          <button
            onClick={fetchRandomJoke}
            className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 transition"
          >
            Next Joke
          </button>
        </div>
      </div>
    </div>
  )
}

export default RandomJokes