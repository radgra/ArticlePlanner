import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  @Input() articleForm:FormGroup
  @Output() formSubmitted:EventEmitter<FormGroup> = new EventEmitter()
  @ViewChild('f') formDirective:NgForm
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted.emit(this.articleForm)
  }

}
