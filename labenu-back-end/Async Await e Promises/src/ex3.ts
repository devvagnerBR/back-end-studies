import axios from 'axios'
import { baseURL } from './baseURL'


const news = {
    title: "Homem Morde Cachorro",
    content: "Homem Raivoso morde cachorro",
    date: Date.now()
}

const createNews = ( news: any ) => {
    return axios
        .put( `${baseURL}/news`, news )
}

const getAllSubscribers = () => {

    return axios
        .get( `${baseURL}/subscribers` )
        .then( res => res.data )

}

const getSubscribersIds = ( subscribers: any ) => {

    return subscribers.map( ( subscriber: any ) => {
        return subscriber.id
    } )

}

const notifyAllSubscribers = ( ids: string[] ) => {

    for ( const id of ids ) {

        axios.post( `${baseURL}/notifications`, {

            subscriberId: id,
            message: "Confira as suas ultimas notícias!"

        } )

            .then( () => console.log( `Notificação enviada a ${id}` ) ) // função anonima pq ele precisa retornar void
            .catch( () => console.log( `Erro no ${id}` ) )

    }

}

createNews( news )
    .then( getAllSubscribers )
    .then( getSubscribersIds )
    .then( notifyAllSubscribers )
    .catch( e => e.response?.data || e.message )
    .then( console.log )
