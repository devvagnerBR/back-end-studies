
import { IdGenerator } from '../../services/IdGenerator';



export class ProductModel {

    public id: string

    constructor(

        public name: string,
        public price: number,
        public image_url: string

    ) { this.id = IdGenerator() }





}
