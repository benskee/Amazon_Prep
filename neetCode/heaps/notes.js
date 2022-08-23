const obj = {
    1: 'A',
    2: 'B',
    3: 'C'
}

let arr = ['A', 'B', 'C']

for(const o in obj) {
    console.log('in obj: ', o)
} // 1, 2, 3

// for(const o of obj) {
//     console.log('of obj: ', o)
// }     ***ERROR***

for(const o in arr) {
    console.log('in arr: ', o)
} //0, 1, 2

for(const o of arr) {
    console.log('of arr: ', o)
} // A, B, C

while(arr.length) {
    arr.splice(0,1)
    console.log(arr)
}