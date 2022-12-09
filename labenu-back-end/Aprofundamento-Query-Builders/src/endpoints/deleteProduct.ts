import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const deleteProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        // const [ productExists ] = await connection
        // .raw(`SELECT * FROM ${TABLE_PRODUCTS}
        // WHERE id = "${id}";`)

        const productExists = await connection(TABLE_PRODUCTS)
            .select()
            .where({ id })

        if (productExists.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        // await connection.raw(`
        // DELETE FROM ${TABLE_PRODUCTS}
        // WHERE id = "${id}";`)

        await connection(TABLE_PRODUCTS)
            .delete()
            .where({ id })
      
        res.status(200).send({ message: "Produto deletado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}