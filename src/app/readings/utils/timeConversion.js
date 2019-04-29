export function timeObjectToNumber(time) {
    let number = 0
    if(time.hours){
        number += time.hours * 3600
    }
    if(time.minutes){
        number += time.hours * 60
    }
    if(time.seconds){
        number += time.seconds
    }

    return number === 0 ? null : number
    
}