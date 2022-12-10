import express from 'express'
import cors from 'cors'
import { createUser } from './endpoints/createUser';
import { getUserById } from './endpoints/getUserByID';


const app = express();
app.use( express.json() );
app.use( cors() );

// Create User
app.post( "/user", createUser )

// Get User by ID
app.get( "/user/:id", getUserById )











app.listen( process.env.PORT || 3003, () => {
    console.log( `Server is running at  ${process.env.PORT || 3003}` );
} )
