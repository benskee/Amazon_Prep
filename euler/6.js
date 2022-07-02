// Sum square difference

const sqDiff = num => {
    let sumSq = 0;
    let sqSum = 0;

    for(let i=1; i<=num; i++) {
        sumSq += i**2;
        sqSum += i;
    }
    return sqSum**2 - sumSq
}

console.log(sqDiff(100))