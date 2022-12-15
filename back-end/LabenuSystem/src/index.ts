import { Request, Response } from 'express'
import { app } from './app';

enum TIPO_TURMA {
    integral = 'integral',
    NOTURNO = 'noturno'
}
type criaTurmaInput = {
    id: number,
    nome: string,
    data_inicio: string,
    data_fim: string,
    modulo: number,
    tipo: TIPO_TURMA
}

//user
app.post( "/turma", ( req: Request, res: Response ) => {
    
    let errorCode = 400

    try {

        const input: criaTurmaInput = {
            id: req.body.id,
            nome: req.body.nome,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim,
            modulo: 0,
            tipo: req.body.tipo
        }

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
} );
