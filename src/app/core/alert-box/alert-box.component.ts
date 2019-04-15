import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { MatSnackBar } from '@angular/material';
import { MySnackbarComponent } from '../my-snackbar/my-snackbar.component';

@Component({
  selector: 'app-alert-box',
  template: '',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  constructor(private articleSerice:ArticleService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.articleSerice.notify$.subscribe((msg:string) => {
      this.snackBar.openFromComponent(MySnackbarComponent,{
        data:{
          msg:msg
        }
      })
    })
  }

}
