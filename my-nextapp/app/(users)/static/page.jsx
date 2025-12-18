import {db} from '@/config/db.js'

const StaticPage = async () => {

    const [studentInfo] = await db.execute("SELECT * FROM Student")
    console.log(studentInfo)

  return (
    <div>
      <h1>Static Page DB</h1>

      <ul>
        {
            studentInfo.map((info, id) => {
                return <li key={id}>{info.id} {info.name} {info.roll}</li>
            })
        }
      </ul>
    </div>
  )
}

export default StaticPage
