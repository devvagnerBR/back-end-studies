import express, { Request, Response } from 'express';
import cors from "cors";
import connection from './connections';
import { AddressInfo } from 'net';


const app = express();
app.use( express.json() );
app.use( cors() );


// GET ALL ACTORS

app.get( "/actor", async ( req: Request, res: Response ): Promise<void> => {

    try {

        const result = await connection.raw( `
        SELECT * FROM Actor;

    `)

        res.status( 200 ).send( { message: result[0] } )

    } catch ( error: any ) {

        res.status( 500 ).send( error.sqlMessage || error.message )

    }
} )


// ADD ACTOR

app.post( "/actor", async ( req: Request, res: Response ): Promise<void> => {

    try {
        await connection.raw( `
        INSERT INTO Actor(id,name,salary, birth_date,gender)
        VALUES(
            ${Date.now().toString()},
            "${req.body.name}",
            ${req.body.salary},
            "${req.body.birthDate}",
            "${req.body.gender}"
            );
        `)

        res.status( 201 ).send( 'Ator criado com sucesso' )

    } catch ( error: any ) {
        res.status( 500 ).send( error.sqlMessage || error.message )
    }

} )




//  UPDATE ACTOR

app.put( "/actor/:id", async ( req: Request, res: Response ): Promise<void> => {

    try {

        await connection( "Actor" )

            .update( {

                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birthDate,
                gender: req.body.gender,

            } ).where( { id: req.params.id } )

        res.status( 200 ).send( { id: req.params.id } )

    } catch ( error: any ) {

        res.status( 500 ).send( error.sqlMessage || error.message )

    }

} )


// DELETE ACTOR

app.delete( '/actor/:id', async ( req: Request, res: Response ): Promise<void> => {

    try {

        await connection( "Actor" ).where( { id: req.params.id } ).delete()
        res.status( 200 ).send( "Ator deletado com sucesso" )

    } catch ( error: any ) {

        res.status( 500 ).send( error.sqlMessage || error.message )
    }

} )




const server = app.listen( 3003, () => {
    if ( server ) {
        const address = server.address() as AddressInfo;
        console.log( `Server is running in http://localhost: ${address.port}` );
    } else {
        console.error( `Server is not running in https://localhost` );
    }
} );


