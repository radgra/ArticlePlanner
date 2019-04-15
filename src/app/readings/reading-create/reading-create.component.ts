import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-reading-create',
  templateUrl: './reading-create.component.html',
  styleUrls: ['./reading-create.component.css']
})
export class ReadingCreateComponent implements OnInit {
  readingForm:FormGroup
  articles:Observable<Article[]>
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles()
    this.readingForm = new FormGroup({
      notes:new FormControl(),
      time:new FormControl(),
      article:new FormControl()
    })
  }

  onSubmit() {
    console.log(this.readingForm)
  }

  displayFn(article?:Article) {
    console.log(article)
    return article ? article.title : undefined
  }

}
