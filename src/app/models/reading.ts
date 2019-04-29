export interface Reading {
    id?:string;
    date?:Date;
    notes?:string;
    time?:number;
    articleId:string;
    completed?:boolean;
    comprehension?:number;
}