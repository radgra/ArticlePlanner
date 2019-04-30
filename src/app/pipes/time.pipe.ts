import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeInterval'
})
export class TimePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const hours = Math.floor(value / 3600)
    let restSecs = value - (hours * 3600)
    const minutes = Math.floor(restSecs / 60)
    const seconds = restSecs - (minutes * 60)

    const hoursDisplay = hours >= 10 ? hours : '0'+hours 
    const minutesDisplay = minutes >= 10 ? minutes : '0'+minutes
    const secondsDisplay = seconds >= 10 ? seconds : '0'+seconds 
       
    return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`

  }

}
