import { db } from "@/config/db";

export const revalidate = 20 ; // seconds
// ISR ---> Incremental Static Regeneration
// ISR allows you to update a static page after deployment, without rebuilding the entire app.

                
const page = async () => {
    const [data] = await db.execute("SELECT * FROM Student")
    console.log("Static Students")

    return (
        <div>
            <h1>Rendering Static Page</h1>

            <ul>
                {
                    data.map((info, id) => {
                        return (
                            <div>
                                <li key={id}>Name: {info.name}, Roll: {info.roll}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default page;