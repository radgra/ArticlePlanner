import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { MatSnackBar } from '@angular/material';
import { MySnackbarComponent } from 'src/app/core/my-snackbar/my-snackbar.component';
import { ArticleFormComponent } from '../article-form/article-form.component';
import { ArticleFormBaseComponent } from '../article-form/article-form-base/article-form-base.component';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent extends ArticleFormBaseComponent implements OnInit {
  constructor(articleService: ArticleService) { 
    super(articleService)
  }

  ngOnInit() {
    this.initForm()
  }

  onSubmit(form:FormGroup) {
    if(!form.valid) return

    console.log('this.articleService :', this.articleService);
    this.articleService.addArticle(this.articleForm.value)
    this.resetForm(form)
  }

}
