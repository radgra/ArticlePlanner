import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { TimerService } from 'src/app/services/timer.service';
import { timer, BehaviorSubject } from 'rxjs';
import { Timer } from 'src/app/models/timer';
import { MatDialog } from '@angular/material';
import { MyDialogComponent, MyDialogData } from 'src/app/core/my-dialog/my-dialog.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article:Article
  conclusions:string = ''
  timer:BehaviorSubject<Timer>
  editConclusions:boolean = false
  // @ViewChild('conInput',{read:ElementRef}) conInput:ElementRef
  constructor(private route:ActivatedRoute,private router:Router,
    private articleService:ArticleService,private timerService:TimerService, public dialog:MatDialog
    ) { }

  ngOnInit() {
    
    this.route.params.subscribe((params:Params) => {
      console.log(params)
      this.articleService.getArticle(params.id).subscribe(
        (article:Article) => {
          this.article = article
          this.conclusions = article.conclusions;
        }
      )
    })

    this.timerService.starter$.subscribe(data => console.log(data))
  }

  handleDelete() {
    this.articleService.deleteArticle(this.article.id)
    this.router.navigate(['/'])
  }

  startTimer() {
    this.timerService.startTimer()
  }

  pauseTimer() {
    this.timerService.pauseTimer()
  }

  updateConclusions() {
    const updatedArticle:Article = {...this.article,conclusions:this.conclusions}
    this.articleService.updateArticle(updatedArticle).subscribe(article => {
      console.log('here')
      if(article) {
        this.conclusions = article.conclusions
        this.article = article
      }
      this.editConclusions = false
      console.log(this.editConclusions)
    })
    this.editConclusions = false
  }

  displayForm() {
    this.editConclusions = true;
    // console.log(this.conInput)
  }

  addReading() {
    const dialogRef = this.dialog.open(MyDialogComponent,{
      data:{
        type: 'addReading',
        article:this.article
      } as MyDialogData,
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
    })
  }

}
