import mysql from 'mysql2/promise'

// mysql.createConnection();

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mYsQl@1qwerty',
    database: "NextDB"
})

try {
    const connection = await db.getConnection()  // This is "top-level await"
    console.log(`Database connected successfully`)
    connection.release()
} 
catch (error) {
    console.log(`Database connection failed: ${error}`);
    process.exit(1)
}






// 🟢 For "top-level await" we do not need async function

/* Because --> This 'await' is not inside of any function

🟢 We can use 'await' Directly in the module scope, we do not need any async function

=> "That’s top-level await.
*/