import { Request, Response } from "express";
import { USER_DTO } from './../models/UserDTO';
import { UserBusiness } from './../business/UserBusiness';
import { UserDatabase } from './../data/UserDatabase';
import { USER } from "../models/User";

export class UserController {

    public async CreateUser( req: Request, res: Response ) {

        try {

            const { name, email, password }: USER_DTO = req.body
            const user: USER_DTO = { name, email, password }
            const userBusiness = new UserBusiness()

            await userBusiness.createUser( user )
            res.status( 200 ).send( 'Usuário criado com sucesso!' )

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }

    }

    public async getUsers( req: Request, res: Response ) {

        try {

            const userDatabase = new UserDatabase()
            const result = await userDatabase.getUsers()

            res.status( 200 ).send( result )

        } catch ( error: any ) {

            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }


    }

    public async editUser( req: Request, res: Response ) {

        try {

            const { id } = req.params;
            const { name, email, password } = req.body;
            const update: USER_DTO = { name, email, password }

            const userBusiness = new UserBusiness()
            await userBusiness.editUser( { id, ...update } )


            res.status( 200 ).send( { message: 'usuário atualizado com sucesso' } )

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }
    }


    public async getUserById( req: Request, res: Response ) {

        try {

            const { id } = req.params

            const userBusiness = new UserBusiness();
            const result = await userBusiness.getUserById( id )

            res.status( 200 ).send( { user: result } )

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }
    }


    public async deleteUser( req: Request, res: Response ) {



        try {

            const { id } = req.params
            const userBusiness = new UserBusiness()
            userBusiness.deleteUser( id )

            res.status( 200 ).send( 'usuário deletado com sucesso!' )
            
        } catch ( error: any ) {

            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )

        }
    }
}