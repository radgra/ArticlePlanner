import { Component, OnInit } from '@angular/core';
import { TimerService, TimerState } from 'src/app/services/timer.service';
import { Timer } from 'src/app/models/timer';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  TimerState = TimerState
  timer: Timer
  currentArticle: Article
  timerState: TimerState = TimerState.inactive
  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.timer$.subscribe((val: any) => {
      this.timer = val
    })

    this.timerService.timerState$.subscribe((timerState:TimerState) => {
      this.timerState = timerState
    })
    // this.timerState.pipe(
    //   filter(data => data === false)
    // ).subscribe(data => { 
    //     this.timer = {
    //       hours: 0,
    //       minutes: 0,
    //       seconds: 0
    //     }
    //     this.currentArticle = null
    // })

    this.timerService.currentArticle$.subscribe((article: Article) =>{
      this.currentArticle = article
      console.log(article)
    })

  }

}
