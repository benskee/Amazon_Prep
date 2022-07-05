// Number letter counts

// corresponding count of letters for number
const dict = {
    0: 0,
    1: 3,
    2: 3,
    3: 5,
    4: 4,
    5: 4,
    6: 3,
    7: 5,
    8: 5,
    9: 4,
    10: 3,
    11: 6,
    12: 6,
    13: 8,
    14: 8,
    15: 7,
    16: 7,
    17: 9,
    18: 8,
    19: 8,
    20: 6,
    30: 6,
    40: 5,
    50: 5,
    60: 5,
    70: 7,
    80: 6,
    90: 6,
}

// sum = 11 for 'one thousand'
let sum = 11

for(let j=1; j<1000; j++) {
    let i = j;
    if(i>=100) {
        if(i % 100 == 0) {
            // +7 for 'hundred'
            sum += dict[Math.floor(i/100)] + 7 
        } else {
            // +10 for 'hundred and'
            sum += dict[Math.floor(i/100)] + 10
        }
        i = i % 100
    }
    if(i<=20) {
        sum += dict[i]
    } else {
        sum += dict[Math.floor(i/10)*10] + dict[i % 10]
    }
}

console.log(sum)