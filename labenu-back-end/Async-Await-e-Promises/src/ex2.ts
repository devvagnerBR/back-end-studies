import axios from "axios";
import { baseURL } from "./baseURL";

// then

axios.get( `${baseURL}/subscribers/idInvalido/notifications` )

    .then( ( res => res.data ) )
    .then( console.log ) // res.data
    .catch( err => console.log( err.message ) )  // err

// then && catch

axios.get( `${baseURL}/subscribers/idInvalido/notifications` ) // pegar as requisições

    .then( res => res.data ) // pegar a resposta da requisição  
    .then( console.log )    // imprimir a resposta da requisição
    .catch( e => e.response?.data || e.message ) // capturo o erro e retorna a mensagem do erro |  // ? null safety
    .then( console.log ) //  mostra o erro no console

    // !!  afirma que não vai chegar nulo no TS Ex: console.log(a!!.length)

    