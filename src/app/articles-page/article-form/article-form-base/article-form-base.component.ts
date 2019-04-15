import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleFormComponent } from '../article-form.component';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-form-base',
  templateUrl: './article-form-base.component.html',
  styleUrls: ['./article-form-base.component.css']
})
export class ArticleFormBaseComponent implements OnInit {
  articleForm: FormGroup
  @ViewChild('f') formComponentRef: ArticleFormComponent
  constructor(protected articleService: ArticleService) { }

  ngOnInit() {
  }

  protected initForm() {
    this.articleForm = new FormGroup({
      title: new FormControl(null, Validators.required), //later unique async/debounce/unlesschaned etc
      shortDescription: new FormControl(),
      url: new FormControl(null, Validators.required) //moze async sprawdzic czy url dziala/ debounce
    })
  }

  // onSubmit(form:FormGroup) {
  //   if(!form.valid) return
  //   // console.log('this.articleService :', this.articleService);
  //   this.articleService.addArticle(this.articleForm.value)
  //   this.resetForm(form)
  // }
  
  protected resetForm(form:FormGroup) {
    form.reset()
    this.formComponentRef.formDirective.resetForm()
  }

}
