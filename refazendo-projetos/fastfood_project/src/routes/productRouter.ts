import express from 'express';
import { UserController } from '../controller/UserController';
import { ProductController } from './../controller/ProductController';


export const productRouter = express.Router();
const productController = new ProductController();


productRouter.post( '/', productController.createProduct )
productRouter.get( '/', productController.getProductByName )
productRouter.get( '/', productController.getAllProducts )