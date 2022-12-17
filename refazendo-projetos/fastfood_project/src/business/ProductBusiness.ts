import { PRODUCT_DTO } from "../models/product/ProductDTO";
import { InvalidRequest } from './../error/InvalidRequest';
import { InvalidPrice } from './../error/InvalidPrice';
import { InvalidURL } from './../error/InvalidUrl';
import { ShortName } from './../error/ShortName';
import { ProductModel } from "../models/product/ProductModel";
import { ProductDatabase } from './../data/ProductDatabase';
import { CustomError } from './../error/CustomError';


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

            const productDatabase = new ProductDatabase()
            return await productDatabase.GetAllProducts()

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }


    }
}