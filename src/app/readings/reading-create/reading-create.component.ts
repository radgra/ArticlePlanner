import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { MatSlider } from '@angular/material';
import { ReadingService } from 'src/app/services/reading.service';
import { Reading } from 'src/app/models/reading';
import { timeObjectToNumber } from '../utils/timeConversion.js'
@Component({
  selector: 'app-reading-create',
  templateUrl: './reading-create.component.html',
  styleUrls: ['./reading-create.component.css']
})
export class ReadingCreateComponent implements OnInit {
  readingForm:FormGroup
  articles:Observable<Article[]>
  @ViewChild('slider') slider:MatSlider
  @Output('confirm') responseEvent:EventEmitter<boolean> = new EventEmitter()
  constructor(private articleService:ArticleService, private readingService:ReadingService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles()
    this.readingForm = new FormGroup({
      notes:new FormControl(),
      time:new FormGroup({
        hours:new FormControl(),
        minutes:new FormControl(),
        seconds:new FormControl()
      }),
      article:new FormControl(),
      comprehension:new FormControl()
    })
  }

  onSubmit() {
    if(this.readingForm.valid) {
      
      const newReading:Reading = {
        ...this.readingForm.value,
        articleId:this.readingForm.getRawValue().article.id,
        time:timeObjectToNumber(this.readingForm.value.time)
      }

      this.readingService.createReading(newReading).subscribe(data => {
        this.responseEvent.emit(true)
      })
    }

  }

  displayFn(article?:Article) {
    console.log(article)
    return article ? article.title : undefined
  }

  handleSliderChange(event:{['value']:any}) {

    this.readingForm.patchValue({
      comprehension:event.value
    })

    if(event.value === null) {
      this.slider.value = 0;
    }
  }

}
