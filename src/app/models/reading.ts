export interface Reading {
    id?:string;
    date?:Date;
    time?:number;
    articleId:string;
    completed:boolean;
}