import { app } from './app';
import { createUser } from './endpoints/user/createUser';
import { getAllUsers } from './endpoints/user/getAllUsers';
import { getUserById } from './endpoints/user/getUserById';
import { editUser } from './endpoints/user/editUser';

app.get( "/users", getAllUsers )
app.get( "/user/:id", getUserById )
app.post( "/user", createUser )
app.put( "/user/:id", editUser )