import axios from "axios";
import { baseURL } from "./baseURL";

// then

axios.get( `${baseURL}/subscribers` )
    .then( ( res => res.data ) )
    .then( console.log ) // res.data
