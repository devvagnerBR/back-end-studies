import { v4 as ID } from 'uuid';

export const IdGenerator = () => {
    return ID().toString()
};