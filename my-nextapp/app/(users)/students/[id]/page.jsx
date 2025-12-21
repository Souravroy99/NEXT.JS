import { db } from "@/config/db";
import { notFound } from "next/navigation";


export async function generateStaticParams(){
    const [students] = await db.execute(`SELECT id FROM Student`)
    return students.map((student) => ({id: student.id.toString()}))
}

const SingleStudent = async (props) => {
    
    const params = await props.params;
    const {id} = params ;

    const [[student]] = await db.execute(`SELECT * FROM Student WHERE id = ${id}`)

    console.log(student)

    if(!student) return notFound()

  return (
    <div className="flex bg-amber-600 gap-12 h-40 items-center justify-center">
      <div className="w-60 ml-0 text-3xl text-yellow-400 bg-green-500">
        <h1>Single Student</h1>
      </div>

      <div className="text-3xl">
        <h1>Name: {student.name}</h1>
        <h1>Id: {student.id}</h1>
        <h1>Roll: {student.roll}</h1>
      </div>
    </div>
  )
}

export default SingleStudent
