import express, { Request, Response } from 'express';
import cors from "cors";
import connection from './connections';
import { AddressInfo } from 'net';


const app = express();
app.use( express.json() );
app.use( cors() );

app.post( "/actors", async ( req: Request, res: Response ): Promise<void> => {

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

        res.status(201).send('Ator criado com sucesso')

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


// 46MIN
