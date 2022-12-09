import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(

   req: Request,
   res: Response

): Promise<void> { // a função não precisa retornar nada, ela vai enviar uma resposta somente.

   try {

      let title = req.query.title as string;

      const result = await
         connection( "aula49_recipes" )
            .where( "title", "like", `%${title}%` )

      const recipes = result.map( toRecipe )
      res.status( 200 ).send( recipes )

   } catch ( error ) {

      res.status( 500 ).send( "Internal server error" )

   }
}

const toRecipe = ( input: any ): recipe => {

   return {

      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at

   }

}