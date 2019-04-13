import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles:Article[] = [
    {
      id:"1",
      title:"How to implement redux.",
      shortDescription:"Some stuf how to do redux",
      readingsCount:0,
      url:"http://some.com/redux"
    },
    {
      id:"2",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      conclusions:"I dont knwo what to think"
    },
    {
      id:"3",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      conclusions:"I dont knwo what to think"
    },
    {
      id:"4",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      conclusions:"I dont knwo what to think"
    },
    {
      id:"5",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      conclusions:"I dont knwo what to think"
    },
    
  ]
  constructor() { }

  getArticles() {
    return of(this.articles)
  }

  getArticle(id) {
    return this.articles.find(article => article.id === id )
  }
}
