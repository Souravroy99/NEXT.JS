'use client'

import { use } from "react"

const SingleProfile = (props) => {

  const data = use(props.params)

  return (
    <div>
      <h1>Dynamic: {data.username}</h1>
    </div>
  )
}

export default SingleProfile