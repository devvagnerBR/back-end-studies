import express, { Express, Request, Response } from 'express'
import cors from 'cors'

import { accounts } from './accounts'

const app: Express = express()

app.use( express.json() )
app.use( cors() )

// CREATE ACCOUNT

app.post( '/users', ( req: Request, res: Response ) => {

    try {

        const { name, CPF, dateOfBirthAsString } = req.body
        const [day, month, year] = dateOfBirthAsString.split( "/" )
        const dateOfBirth: Date = new Date( `${year}-${month}-${day}` )

        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if ( ageInYears < 18 ) {
            res.statusCode = 405
            throw new Error( 'Usuário precisa ter 18 anos ou mais para criar uma conta' )
        }

        accounts.push( {
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        } )


        res.status( 201 ).send( 'Conta criada com sucesso!' )

    } catch ( error: any ) {
        console.log( error );
        res.send( error.message )
    }


} )

// GET ACCOUNTS

app.get( '/users', ( req: Request, res: Response ) => {

    try {

        if ( !accounts.length ) {
            res.statusCode = 404
            throw new Error( 'Nenhuma conta encontrada' )
        }

        res.status( 200 ).send( accounts )

    } catch ( error: any ) {
        res.send( error.message )
    }

} )

app.listen( 3003, () => console.log( 'Server is running at localhost:3003' ) )

