import { app } from './app';
import { createUser } from './endpoints/user/createUser';
import { getAllUsers } from './endpoints/user/getAllUsers';
import { getUserById } from './endpoints/user/getUserById';
import { editUser } from './endpoints/user/editUser';
import { deleteUser } from './endpoints/user/deleteUser';
import { createTask } from './endpoints/tasks/createTask';
import { getTaskById } from './endpoints/tasks/getAllTasks';

//user
app.get( "/users", getAllUsers )
app.get( "/user/:id", getUserById )
app.post( "/user", createUser )
app.put( "/user/:id", editUser )
app.delete( "/user/:id", deleteUser )

//tasks
app.post( "/task/:id", createTask )
app.get( "/task/:id", getTaskById )