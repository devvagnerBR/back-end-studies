import express from 'express';
import { TaskController } from './../1_controller/TaskController';


export const taskRouter = express.Router()
const taskController = new TaskController()

taskRouter.post( '/', taskController.createTask )
