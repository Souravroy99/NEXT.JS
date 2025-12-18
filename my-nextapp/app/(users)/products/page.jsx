
const Products = async (props) => {
   const searchParams = await props.searchParams
    console.log(searchParams)
  
    const {page, category, line} = searchParams

    return (
    <div>
        <h1>Search Params</h1>
        <h1>Category: {category}</h1>
        <h1>Page: {page}</h1>
        <h1>Line: {line}</h1>
    </div>
  )
}

export default Products
