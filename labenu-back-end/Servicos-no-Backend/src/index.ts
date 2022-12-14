import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { createUser } from './endpoints/createUser'

dotenv.config()

export const app = express()
app.use( express.json() )
app.use( cors() )



app.post( "/users", createUser )



app.listen( process.env.PORT || 3003, () => {
    console.log( `Server is running on port `, process.env.PORT || 3003 );
} )
