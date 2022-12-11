import express from 'express'
import cors from 'cors'
import { createUser } from './endpoints/createUser';
import { getAllUsers } from './endpoints/getAllUsers';
import { createProduct } from './endpoints/CreateProduct';
import { getAllProducts } from './endpoints/getAllProducts';
import { checkout } from './endpoints/checkout';
import { getUserPurchase } from './endpoints/getUserPurchase';
import { deleteProduct } from './endpoints/deleteProduct';

const app = express();
app.use( express.json() );
app.use( cors() );

app.post( "/users", createUser )
app.get( "/users", getAllUsers )
app.post( "/products", createProduct )
app.get( "/products", getAllProducts )
app.post( "/purchases", checkout )
app.get( "/users/:user_id/purchases", getUserPurchase )
app.delete( "/products/:id", deleteProduct )


app.listen( process.env.PORT || 3000, () => {
    console.log( `Server is running at  ${process.env.PORT || 3000}` );
} )