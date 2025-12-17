const SingleProfilePost = async (props) => {

    const data = await props.params

  return (
    <div>
      <h1>Dynamic Username: {data.username}</h1>
      <h1>Dynamic Post Id: {data.postId}</h1>
    </div>
  )
}

export default SingleProfilePost