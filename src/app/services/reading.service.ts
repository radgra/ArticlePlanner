import { Injectable } from '@angular/core';
import { Reading } from '../models/reading';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {
  readings:Reading[] = []
  constructor() { }

  createReading(reading:Reading) {
    this.readings.push(reading)
    return of(reading)
  }

  getReadings() {
    return of(this.readings.slice())
  }
}
