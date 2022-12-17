import { Request, Response } from "express";
import { PRODUCT_DTO } from "../models/product/ProductDTO";
import { ProductBusiness } from './../business/ProductBusiness';



export class ProductController {


    public async createProduct( req: Request, res: Response ) {

        try {

            const { name, price, image_url }: PRODUCT_DTO = req.body
            const newProduct: PRODUCT_DTO = { name, price, image_url }
            const productBusiness = new ProductBusiness();

            await productBusiness.createProduct( newProduct )
            res.status( 200 ).send( `produto ${name} criado com sucesso!` )


        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }
    }
}