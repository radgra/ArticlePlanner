import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article:Article
  constructor(private route:ActivatedRoute,private router:Router,private articleService:ArticleService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      console.log(params)
      this.article = this.articleService.getArticle(params.id)

      
    })
  }

}
