import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleFormComponent } from '../article-form/article-form.component';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Article } from 'src/app/models/article';
import { ArticleFormBaseComponent } from '../article-form/article-form-base/article-form-base.component';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})

export class ArticleEditComponent extends ArticleFormBaseComponent implements OnInit {
  article:Article
  constructor(articleService:ArticleService,private route:ActivatedRoute, private router:Router) { 
    super(articleService)
  }

  ngOnInit() {
    this.initForm()

    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.articleService.getArticle(params.id) 
      })
    )
    .subscribe((article:Article) => {
      this.article = article
      this.articleForm.patchValue(article)
    })
  }

  onSubmit(form:FormGroup) {
    if(!form.valid) return
    console.log('this.articleService :', this.articleService);
    const updatedArticle:Article = Object.assign(this.article,this.articleForm.value)

    console.log('updatedArticle :', updatedArticle);
    this.articleService.updateArticle(updatedArticle)
    this.router.navigate(['/','articles',this.article.id])

  }

}
