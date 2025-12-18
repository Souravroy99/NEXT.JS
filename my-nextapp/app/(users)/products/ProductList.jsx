'use client'

import { useSearchParams } from 'next/navigation'

const ProductList = () => {

    const searchParams = useSearchParams()

    console.log("ProductList: ", searchParams.get('page'))

  return (
    <div>
        <h1>Product List</h1>
    </div>  
  )
}

export default ProductList