const SingleProfilePost = async (props) => {

  const params = await props.params
  const searchParams = await props.searchParams


  const {username, postId} = params
  const {page, category, line} = searchParams

  return (
    <div>
      <h1 className="text-6xl m-8">Dynamic Routing</h1>

      <div className="bg-green-600 p-4 text-5xl mb-12">
        <h1>--- Params --- </h1>

        <p>Username: {username}</p>
        <p>Post Id: {postId}</p>
      </div>


      <div className="bg-red-800 p-4 text-5xl">
        <h1>--- Search Params --- </h1>

        <p>Category: {category}</p>
        <p>Page: {page}</p>
        <p>Line: {line}</p>
      </div>

    </div>
  )
}

export default SingleProfilePost