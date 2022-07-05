// counting sundays

let year = 1900;
let month = 1
let day = 1
let sundays = 0
let months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
}

while(year<2001) {
    if(month == 12) {
        year++
        month = 1
        day += 31
    } else if(month == 2) {
        month++
        day += 28
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            day++
        }
    } else {
        day += months[month]
        month++
    }
    if(day>360 && day % 7 == 0) sundays++
}

console.log(sundays)