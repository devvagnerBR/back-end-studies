
import { BaseDatabase } from './BaseDatabase';
import { ProductModel } from './../models/product/ProductModel';

export class ProductDatabase extends BaseDatabase {

    private TABLE_PRODUCTS = 'fast_food_products'

    public async insertProduct( product: ProductModel ) {


        try {

             await ProductDatabase.connection
                .insert( product )
                .into( this.TABLE_PRODUCTS )

        } catch ( error: any ) {

            throw new Error( error.message )

        }



    }
}