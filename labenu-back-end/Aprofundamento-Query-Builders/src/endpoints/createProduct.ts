import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const createProduct = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const name = req.body.name
        const price = req.body.price

        if ( !name || !price ) {

            throw new Error( "Parâmetros 'name' e/ou 'price' faltando." )

        }

        if ( typeof name !== "string" ) {

            errorCode = 422
            throw new Error( "Parâmetro 'name' deve ser string." )

        }

        if ( typeof price !== "number" ) {

            errorCode = 422
            throw new Error( "Parâmetro 'price' deve ser number." )
        }

        if ( price <= 0 ) {

            errorCode = 422
            throw new Error( "Parâmetro 'price' deve ser number maior que 0." )

        }

        const newProduct: Product = {

            id: Date.now().toString(),
            name: name,
            price: price

        }

        // await connection.raw(`
        // INSERT INTO ${TABLE_PRODUCTS} (id, name, price)
        // VALUES ("${newProduct.id}", "${newProduct.name}", ${newProduct.price});
        // `)

        // await connection(TABLE_PRODUCTS).insert(newProduct)

        await connection( TABLE_PRODUCTS )

            .insert( {

                id: newProduct.id,
                name: newProduct.name,
                price: newProduct.price

            } )

        res.status( 200 ).send( { product: newProduct, message: "Produto criado com sucesso." } )

    } catch ( error ) {

        res.status( errorCode ).send( { message: error.message } )

    }
}