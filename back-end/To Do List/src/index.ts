import express from 'express'
import cors from 'cors'
import { createUser } from './endpoints/createUser';
import { getUserById } from './endpoints/getUserByID';
import { editUser } from './endpoints/editUser';


const app = express();
app.use( express.json() );
app.use( cors() );

// Create User
app.post( "/user", createUser )

// Get User by ID
app.get( "/user/:id", getUserById )

// Edit User
app.put( "/user/:id", editUser )








app.listen( process.env.PORT || 3003, () => {
    console.log( `Server is running at  ${process.env.PORT || 3003}` );
} )
