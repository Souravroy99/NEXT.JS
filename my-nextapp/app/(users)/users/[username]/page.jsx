const SingleProfile = async (props) => {

    const data = await props.params

  return (
    <div>
      <h1>Dynamic: {data.username}</h1>
    </div>
  )
}

export default SingleProfile