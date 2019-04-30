import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, Observable, empty } from 'rxjs';
import { map, switchMap, mapTo, skipWhile, takeWhile, concatMap, filter, takeUntil, skipUntil, share, tap, shareReplay } from 'rxjs/operators';
import { Timer } from '../models/timer';
import { Article } from '../models/article';

export enum TimerState {
  running,
  paused,
  inactive
}

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private elapsedTime: number = 0
  private timerControllerSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)
  private currentArticleSubject:BehaviorSubject<Article> = new BehaviorSubject(null)
  private timerStateSubject:BehaviorSubject<TimerState> = new BehaviorSubject(TimerState.inactive)
  private timerValuesSubject:BehaviorSubject<Number> = new BehaviorSubject(0)
  timer$:Observable<Number> = this.timerValuesSubject.asObservable()
  timerState$:Observable<TimerState> = this.timerStateSubject.asObservable()
  currentArticle$:Observable<Article> = this.currentArticleSubject.asObservable()


  constructor() {
    
    const stream$ = interval(1000).pipe(
      map(interval => {
        this.elapsedTime = this.elapsedTime + 1;
        return this.elapsedTime
      }),
      // map(rawTime => {
      //   const hours = Math.floor(rawTime / 3600)
      //   let restSecs = rawTime - (hours * 3600)
      //   const minutes = Math.floor(restSecs / 60)
      //   const seconds = restSecs - (minutes * 60)
      //   return {
      //     hours,
      //     minutes,
      //     seconds,
      //     rawTime
      //   } as Timer
      // }),
      )
      
      this.timerControllerSubject.pipe(
        tap(console.log),
        switchMap(val => val === true ? stream$ : empty()),
        ).subscribe((timer:Number) => {
          console.log('timer',timer)
          this.timerValuesSubject.next(timer)
        })
        
      this.timerState$.pipe(
        filter((state:TimerState) => state === TimerState.inactive)
        ).subscribe(data => {
          this.elapsedTime = 0       
          this.currentArticleSubject.next(null)
          this.timerValuesSubject.next(0)
        })
      }

  startTimer(article:Article) {
    this.timerStateSubject.next(TimerState.running)
    this.currentArticleSubject.next(article)
    this.timerControllerSubject.next(true)
  }
  
  resetTimer() {
    this.timerStateSubject.next(TimerState.inactive)
    this.timerControllerSubject.next(false)
  }
  
  pauseTimer() {
    this.timerStateSubject.next(TimerState.paused)
    this.timerControllerSubject.next(false)
  }
  
  resumeTimer() {
    this.timerStateSubject.next(TimerState.running)
    this.timerControllerSubject.next(true)
  }

  getTimer() {
    return this.timer$
  }
}
