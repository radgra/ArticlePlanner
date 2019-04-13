import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles:Article[]
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      articles => {
        console.log(articles)
        this.articles = articles
      }
    )
  }

}
