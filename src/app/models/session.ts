import { Reading } from './reading';

export interface Session {
    id?:string;
    date:Date;
    articles:Reading[];
}