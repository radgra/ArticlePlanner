import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { of, Subject, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  notify$:Subject<string> = new Subject()
  counter:number = 5; 
  articles:Article[] = [
    {
      id:"1",
      title:"How to implement redux.",
      shortDescription:"Some stuf how to do redux",
      readingsCount:0,
      url:"http://some.com/redux",
      added:new Date(),
    },
    {
      id:"2",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      added:new Date(),
      conclusions:"I dont knwo what to think"
    },
    {
      id:"3",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      added:new Date(),
      conclusions:"I dont knwo what to think"
    },
    {
      id:"4",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      added:new Date(),
      conclusions:"I dont knwo what to think"
    },
    {
      id:"5",
      title:"Angular Material Guide.",
      shortDescription:"About angular material",
      readingsCount:0,
      url:"http//some.com/blabla",
      added:new Date(),
      conclusions:"I dont knwo what to think",
    },
    
  ]
  constructor() { }

  getArticles() {
    return of([...this.articles])
  }

  getArticle(id) {
    return of(this.articles.find(article => article.id === id ))
  }

  addArticle(article:Article) {
    article['added'] = new Date()
    this.counter++
    article['id'] = this.counter.toString()
    this.articles.push(article)
    this.notify$.next('Article added !')
  }
  deleteArticle(id:String) {
    const foundIndex:number = this.articles.findIndex((el:Article) => {
      return el.id === id
    })
    if(foundIndex !== -1) {
      this.articles.splice(foundIndex,1)
    }
    this.notify$.next('Article deleted !')
  }

  updateArticle(article:Article) {
    console.log(article)
    let foundIndex = this.articles.findIndex((el:Article) => {
      return el.id === article.id
    })
    if(foundIndex !== -1) {
      this.articles[foundIndex] = article
      this.notify$.next('Article updated !') 
      console.log(this.articles)
      return of(article)
    } else {
      return empty()
    }

  }

}
