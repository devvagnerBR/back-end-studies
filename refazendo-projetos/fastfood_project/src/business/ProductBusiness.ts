import { PRODUCT_DTO } from "../models/product/ProductDTO";
import { InvalidRequest } from './../error/InvalidRequest';
import { InvalidPrice } from './../error/InvalidPrice';
import { InvalidURL } from './../error/InvalidUrl';
import { ShortName } from './../error/ShortName';
import { ProductModel } from "../models/product/ProductModel";
import { ProductDatabase } from './../data/ProductDatabase';
import { CustomError } from './../error/CustomError';
import { ProductNotFound } from './../error/ProductNotFound';
import { InvalidId } from './../error/InvalidID copy';
import { UserNotFound } from './../error/UserNotFound';


export class ProductBusiness {

    public async createProduct( product: PRODUCT_DTO ) {


        try {

            const { name, price, image_url } = product;

            if ( price <= 1 ) throw new InvalidPrice();
            if ( !name || !price || !image_url ) throw new InvalidRequest();
            if ( !image_url.includes( 'http' ) ) throw new InvalidURL();
            if ( name.length <= 3 ) throw new ShortName();

            const newProduct = new ProductModel( name, price, image_url )
            const productDatabase = new ProductDatabase()

            await productDatabase.insertProduct( newProduct )

        } catch ( error: any ) {

            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }

    }

    public async getAllProducts() {


        try {

            const productDatabase = new ProductDatabase();
            return await productDatabase.GetAllProducts();

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage );
        }

    }

    public async getProductByNameOrId( name: string ) {

        try {


            if ( !name ) name = "%";

            const productDatabase = new ProductDatabase();
            const result = await productDatabase.getProductByNameOrId( name );
            if ( !result ) throw new ProductNotFound();


            return result;


        } catch ( error: any ) {

            throw new CustomError( error.statusCode, error.message || error.sqlMessage )

        }


    }


    public async deleteUser( id: string ) {

        try {

            if ( !id ) throw new InvalidRequest();
            if ( id.length < 36 ) throw new InvalidId();

            const productDatabase = new ProductDatabase();
            const findUser = await productDatabase.getProductByNameOrId( id );

            if ( !findUser ) throw new ProductNotFound();

            await productDatabase.deleteProduct( id );

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }
    }

    public async editUser( body: ProductModel ) {

        try {

            const { id, name, price, image_url } = body;

            const productDatabase = new ProductDatabase();
            const [product] = await productDatabase.getProductByNameOrId( id );

            if ( !name && !price && !image_url ) throw new InvalidRequest();
            if ( !id ) throw new InvalidRequest();
            if ( ![product] ) throw new ProductNotFound();


            const update: ProductModel = {

                id: product.id,
                name: name || product.name,
                price: price || product.price,
                image_url: image_url || product.image_url

            };

            await productDatabase.editProduct( update )

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }
    }
}