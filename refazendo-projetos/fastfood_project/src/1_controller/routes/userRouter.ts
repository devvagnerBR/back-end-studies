import express from 'express';
import { UserController } from '../../1_controller/UserController';


export const userRouter = express.Router()
const userController = new UserController()

userRouter.post( '/create', userController.createUser )
