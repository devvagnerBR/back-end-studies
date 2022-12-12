import { app } from './app';
import { createUser } from './endpoints/createUser';
import { getAllUser } from './endpoints/getAllUser';
import { getUserById } from './endpoints/getUserById';
import { editUser } from './endpoints/editUser';
import { deleteUser } from './endpoints/deleteUser';



app.post( "/user", createUser )
app.get( "/user", getAllUser )
app.get( '/user/:id', getUserById )
app.put( "/user/:id", editUser )
app.delete( "/user/:id", deleteUser )