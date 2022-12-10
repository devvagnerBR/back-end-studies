import express from 'express'
import cors from 'cors'


const app = express();
app.use( express.json() );
app.use( cors() );

app.listen( process.env.PORT || 3003, () => {
    console.log( `Server is running at  ${process.env.PORT || 3003}` );
} )