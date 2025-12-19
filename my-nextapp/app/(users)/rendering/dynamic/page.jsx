import { db } from "@/config/db";


// React Cache() only works in server components
import { cache } from "react";


// For making the page as Dynamic
export const dynamic = "force-dynamic"


const page = async () => {

    const student = await getAllStudents()

    return (
        <div>
            <h1>Rendering Dynamic Page</h1>

            <StudentLists/>
        </div>
    )
}

export default page;


const StudentLists = async () => {

    const student = await getAllStudents()

    return (
        <ul>
        {
            student.map((info, id) => {
                return (
                    <li key={id}>Name: {info.name}, Roll: {info.roll}</li>
                )
            })
        }
        </ul>
    )
}


// React Cache() only works in server components
const getAllStudents = cache(async () => {
    const [students] = await db.execute("SELECT * FROM Student")
    console.log("Dynamic Students")

    return students
})