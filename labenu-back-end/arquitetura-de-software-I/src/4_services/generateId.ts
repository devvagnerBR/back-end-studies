import { v4 as ID } from 'uuid'


export const generateId = () => {
    return ID().toString()
}