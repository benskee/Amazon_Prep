// 1000-digit fibonacci number

let limit = 1000
let index = 1;
let seqLength = 0;

let fibA = 1n;
let fibB = 1n;
let fibNum = 0n;

while(seqLength < limit) {
    fibNum = fibA + fibB;
    seqLength = fibNum.toString().length

    fibA = fibB;
    fibB = fibNum;
    index++
}
console.log(index + 1)