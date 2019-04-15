import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, Observable, empty } from 'rxjs';
import { map, switchMap, mapTo, skipWhile, takeWhile, concatMap, filter, takeUntil, skipUntil, share } from 'rxjs/operators';
import { Timer } from '../models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private elapsedTime: number = 0
  private _timer$: BehaviorSubject<any> = new BehaviorSubject(false)
  timer$ = this._timer$.asObservable()
  private pauseTimer$: Subject<any> = new Subject()
  private startTimer$:Subject<any> = new Subject()
  starter$: Observable<any>


  constructor() {
    this.starter$ = this.startTimer$.pipe(
      switchMap(val => val === true ? this.timer$ : empty()),
      share()
    )

    this.timer$ = this.timer$.pipe(
      switchMap(data => interval(1000)),
      map(interval => {
        this.elapsedTime = this.elapsedTime + 1;
        return this.elapsedTime
      }),
      map(rawTime => {
        const hours = Math.floor(rawTime / 3600)
        let restSecs = rawTime - (hours * 3600)
        const minutes = Math.floor(restSecs / 60)
        const seconds = restSecs - (minutes * 60)
        return {
          hours,
          minutes,
          seconds,
          rawTime
        } as Timer
      }),
      // share()
    )
  }

  startTimer() {
    this._timer$.next(true)
    this.startTimer$.next(true)
  }
  
  resetTimer() {
    
  }
  
  pauseTimer() {
    this.pauseTimer$.next(true)
    this.startTimer$.next(false)
  }

  getTimer() {

  }
}
