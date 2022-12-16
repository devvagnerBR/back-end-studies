import { app } from "./1_controller/app"
import { userRouter } from './1_controller/routes/userRouter';



app.use( "/user", userRouter );
// app.use( "/product" );
// app.use( "/purchases" );
