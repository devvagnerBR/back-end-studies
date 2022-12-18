
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

    public async GetAllProducts() {

        try {

            return await ProductDatabase
                .connection( this.TABLE_PRODUCTS )
                .select()

        } catch ( error: any ) {
            throw new Error( error.message )
        }

    }


    public async getProductByNameOrId( name: string ) {

        try {
            return await ProductDatabase
                .connection( this.TABLE_PRODUCTS )
                .select()
                .where( "name", "LIKE", `%${name}%` )
                .orWhere( "id", '=', `${name}` )

        } catch ( error: any ) {
            throw new Error( error.message )

        }


    }

    public async deleteProduct( id: string ) {

        try {
            await ProductDatabase
                .connection( this.TABLE_PRODUCTS )
                .where( { id: id } )
                .delete()

        } catch ( error: any ) {
            throw new Error( error.message )
        }
    }

    public async editProduct( product: ProductModel ) {


        try {

            const { id, name, price, image_url }: ProductModel = product;

            await ProductDatabase.connection( this.TABLE_PRODUCTS )
                .update( { name, price, image_url } )
                .where( { id: id } )

        } catch ( error: any ) {
            throw new Error( error.message )
        }
    }

}
