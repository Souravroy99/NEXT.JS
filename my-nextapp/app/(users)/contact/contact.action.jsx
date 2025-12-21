'use server'

import { db } from "@/config/db"
import { redirect } from "next/navigation"

const contactFormAction = async (formdata) => {
    /*
        const name = formdata.name
        const id = formdata.id
        const roll = formdata.roll
    */
   // OR

   const {name, id, roll} = Object.fromEntries(formdata.entries())

   await db.execute(
    `INSERT INTO student(id, name, roll) values(?, ?, ?)`, [id, name, roll]
   )

   redirect('/')
}

export default contactFormAction
