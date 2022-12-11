import { Request, Response } from "express" // lembrar de sempre importar o req,res
import { getAddressInfo } from './../services/getAddressInfo';
import transporter from './../services/mailTransporter';

export const createUser = async ( req: Request, res: Response ) => {

    try {

        const { zipcode, name, email } = req.body
        const address = await getAddressInfo( zipcode )

        if ( !address ) {
            throw new Error( 'Error on get address!' )
        }

        await transporter.sendMail( {
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: "Conta criada com sucesso",
            text: "Parabéns conta criada com sucesso",
            html: `<h1>Parabéns ${name}, seu acesso foi liberado na meta_dev😊</h1>`
        } )

        res.send( address )

    } catch ( error: any ) {

        res.send( { message: 'Unexpected error!' } )

    }

}