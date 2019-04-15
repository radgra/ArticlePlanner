import { Reading } from './reading';

export interface Article {
    id?:string;
    title:string,
    shortDescription?:string;
    icon?:string;
    readingsCount?:number;
    url:string;
    conclusions?:string;
    readings?:Reading[];
    added?:Date
}