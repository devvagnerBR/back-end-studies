import * as jwt from 'jsonwebtoken'


export type authenticationData = {
    id: string;
};


export class Authenticator {

    public GenerateToken = ( payload: authenticationData ) => {     // gerar token
        return jwt.sign( payload, process.env.JWT_KEY as string, { expiresIn: "5h" } );
    };

    public GetTokenData = ( token: string ) => {    //validar token

        try {

            const tokenData = jwt.verify( token, process.env.JWT_KEY as string ) as authenticationData;
            return tokenData;

        } catch ( error: any ) {

            console.log( error )
            return null

        }

    };

}