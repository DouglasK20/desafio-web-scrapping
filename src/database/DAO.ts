import dotenv from "dotenv"
import { DataAccessObject } from "mysql-all-in-one";

dotenv.config()

const dao = new DataAccessObject({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT as string),
    database: process.env.DB_DATABASE
})

export default dao