import { Injectable } from '@angular/core';
import { Reading } from '../models/reading';
import { of, BehaviorSubject, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {
  readings:Reading[] = [
    {
      id:'1',
      date:new Date(),
      notes:'some notes',
      time:23213,
      articleId:'1',
      comprehension:20
    }
  ]
  notify$ = new Subject()
  readings$ = new BehaviorSubject(this.readings)
  constructor() { }

  createReading(reading:Reading) {
    reading.date = new Date()
    this.readings.push(reading)
    this.readings$.next(this.readings)
    this.notify$.next(('Reading added !'))
    return of(reading)
  }

  getReadings() {
    return this.readings$.asObservable()
  }

  getReadingForArticle(articleId:string) {
    return this.readings$.asObservable().pipe(
      map((readings:Reading[]) => readings.filter((reading:Reading) => reading.articleId === articleId))
    )
  }
}
