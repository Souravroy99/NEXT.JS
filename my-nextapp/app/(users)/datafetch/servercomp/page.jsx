const DataFetchServer = async (props) => {

  // Halting the page for 3 sec
  await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000);
  })

    const searchParams = await props.searchParams ;
    const { queryname } = searchParams 

    const res = await fetch(`https://api.genderize.io/?name=${queryname}`)
    const {name, gender, probability} = await res.json() ;

  return (
      <div className=' text-5xl flex items-center p-4 justify-center m-auto mt-3 w-[20rem] h-[20rem] bg-green-300 '>
        <div className="rounded-2xl shadow-2xl p-8 w-full">
            <div className="text-center">

            <h1 className='font-bold text-gray-500 mb-4'>{name}</h1>
            <p className="text-gray-600">{gender}</p>
            <div>{probability * 100}</div>
            </div>
        </div>
      </div>
  )
}

export default DataFetchServer