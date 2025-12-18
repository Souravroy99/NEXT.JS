import ProductList from "./ProductList"

const Products = async (props) => {
   const searchParams = await props.searchParams
    console.log(searchParams)
  
    const {page, category, line} = searchParams

    return (
    <div className="bg-yellow-600 flex justify-content h-screen w-full align-bottom">
      
      <div className="w-full text-4xl p-12">
        <ProductList />
      </div>

      <div className="w-full text-4xl p-12">
        <h1>Search Params</h1>
        <h1>Category: {category}</h1>
        <h1>Page: {page}</h1>
        <h1>Line: {line}</h1>
      </div>
    </div>
  )
}

export default Products
