import { Suspense } from "react";
import DataCard from "./dataCard";
import Loader from "./loader";

const DataFetchServer = async (props) => {


  const searchParams = await props.searchParams;
  const { queryname } = searchParams


  return (
    <>
      <div className="grid grid-cols-2 h-full">
        <div className="flex items-center h-full justify-center">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, necessitatibus. Quaerat magni doloremque nisi repudiandae consequatur accusamus voluptate repellat adipisci? Libero animi maxime corrupti nulla, ullam suscipit ab nam ex!
          </h1>
        </div>


        <Suspense fallback={<Loader/>}>

          <DataCard queryname={queryname} />

        </Suspense>

      </div>
    </>
  )
}

export default DataFetchServer