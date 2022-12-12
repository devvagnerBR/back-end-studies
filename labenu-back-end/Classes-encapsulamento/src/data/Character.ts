export class Character {

    private id: string
    private name: string
    private description: string
    private age: number
    private gender: string

    constructor( name: string, description: string, age: number, gender: string ) {
        this.id = Math.random().toString()
        this.name = name
        this.age = age
        this.description = description
        this.gender = gender
    }
    
}
