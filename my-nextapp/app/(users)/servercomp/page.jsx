const page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)

    return (
        <>
            <h1>Server Component</h1>
        </>
    )
} 

export default page;