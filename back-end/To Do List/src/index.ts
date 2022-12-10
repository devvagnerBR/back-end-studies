import express from 'express'
import cors from 'cors'
import { createUser } from './endpoints/createUser';
import { getUserById } from './endpoints/getUserByID';
import { editUser } from './endpoints/editUser';
import { createTask } from './endpoints/createTask';
import { getTaskById } from './endpoints/getTaskByID';
import { getAllUsers } from './endpoints/getAllUsers';
import { getTaskByCreatorUserID } from './endpoints/getTaskByCreatorUserID';
import { getUserByNickname } from './endpoints/getUserByNickname';


const app = express();
app.use( express.json() );
app.use( cors() );

// Create User
app.post( "/user", createUser )

// Get User by ID
app.get( "/user/:id", getUserById )

// Edit User
app.put( "/user/:id", editUser )

// Create Task
app.post( "/task", createTask )

// Get Task by ID
app.get( "/task/:id", getTaskById )

// Get All users
app.get( "/users/all", getAllUsers )

// Get tasks created by user
app.get( "/task", getTaskByCreatorUserID )

//get user by nickname

app.get( "/user", getUserByNickname )





app.listen( process.env.PORT || 3003, () => {
    console.log( `Server is running at  ${process.env.PORT || 3003}` );
} )
