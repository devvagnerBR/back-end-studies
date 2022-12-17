import express from 'express';
import { UserController } from '../controller/UserController';


export const userRouter = express.Router()
const userController = new UserController()

userRouter.post( '/create', userController.CreateUser )
userRouter.get( '/', userController.getUsers )
userRouter.get( '/:id', userController.getUserById )
userRouter.put( '/:id', userController.editUser )
userRouter.delete( '/:id', userController.deleteUser )
