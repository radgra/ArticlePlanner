import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { MatSnackBar } from '@angular/material';
import { MySnackbarComponent } from '../my-snackbar/my-snackbar.component';
import { ReadingService } from 'src/app/services/reading.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-alert-box',
  template: '',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  constructor(private articleService:ArticleService, private snackBar:MatSnackBar,private readingService:ReadingService) { }

  ngOnInit() {
    const reading$ = this.readingService.notify$
 
    merge(this.articleService.notify$,reading$)
    .subscribe((msg:string) => {
      this.snackBar.openFromComponent(MySnackbarComponent,{
        data:{
          msg:msg
        }
      })
    })
  }

}
