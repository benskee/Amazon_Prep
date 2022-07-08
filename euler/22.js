let json = require('./names.json')
let names = json.names
let total=0
names.sort()
for(let i=0; i<names.length; i++) {
    let nameVal = 0;
    for(let j=0; j<names[i].length; j++) {
        nameVal += names[i].charCodeAt(j) - 64
    }
    total += (i + 1) * nameVal
}
console.log(total)