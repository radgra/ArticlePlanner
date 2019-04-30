import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { TimerService, TimerState } from 'src/app/services/timer.service';
import { timer, BehaviorSubject, concat, Observable } from 'rxjs';
import { Timer } from 'src/app/models/timer';
import { MatDialog } from '@angular/material';
import { MyDialogComponent, MyDialogData } from 'src/app/core/my-dialog/my-dialog.component';
import { switchMap, tap, filter} from 'rxjs/operators';
import { DataRowOutlet } from '@angular/cdk/table';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  TimerState = TimerState
  article: Article
  timerState:TimerState = TimerState.inactive
  conclusions: string = ''
  timer: Number
  editConclusions: boolean = false
  // @ViewChild('conInput',{read:ElementRef}) conInput:ElementRef
  constructor(private route: ActivatedRoute, private router: Router,
    private articleService: ArticleService, private timerService: TimerService, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.zeroTimer()
    const articleSubscription$ = this.route.params.pipe(
      switchMap((params: Params) => this.articleService.getArticle(params.id)),
      tap((article: Article) => {
        this.article = article
        this.conclusions = article.conclusions;
      }))

    articleSubscription$.pipe(
      switchMap((article:Article) => this.timerService.currentArticle$, (valSrc,valInn) => [valSrc,valInn]),
      filter((data:Article[]) => data[0] !== null && data[1] !== null),
      filter((data:Article[]) => data[0].id === data[1].id),
      switchMap(data => this.timerService.timerState$)
    ).subscribe((timerState:TimerState) => {
      console.log('timerState',timerState)
      this.timerState = timerState
    })

    this.timerService.timer$.subscribe((data: any) => {
      this.timer = data
    })
  }

  handleDelete() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        type: 'deleteArticle'
      } as MyDialogData
    })

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data === true) {
        this.articleService.deleteArticle(this.article.id)
        this.router.navigate(['/'])
      }
    })

  }

  startTimer() {
    if (this.timerState === TimerState.inactive) {
      this.timerService.resetTimer()
      this.timerService.startTimer(this.article)
    } else {
      this.timerService.resumeTimer()
    }
  }

  pauseTimer() {
    this.timerService.pauseTimer()
  }

  updateConclusions() {
    const updatedArticle: Article = { ...this.article, conclusions: this.conclusions }
    this.articleService.updateArticle(updatedArticle).subscribe(article => {
      console.log('here')
      if (article) {
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
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        type: 'addReading',
        article: this.article
      } as MyDialogData,
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
    })
  }

  timerAbort() {
    this.timerService.resetTimer()
    this.zeroTimer()
  }

  zeroTimer() {
    this.timer = 0
  }
}
