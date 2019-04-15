import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles:Article[]
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
    .pipe(
      map((articles:Article[]) => {
        return articles.sort((articleA:Article,articleB:Article) => {
          return articleA.added > articleB.added ? -1 : 1
        })
      })
    )
    .subscribe(
      articles => {
        console.table(articles)
        this.articles = articles
      }
    )
  }

}
