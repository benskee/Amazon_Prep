// Longest Collatz sequence

const collatz = num => {
    let seqs = {1: 0};
    let max = [1, 0];

    const coll = n => {
        let y = 1;
        if(n % 2 == 0) {
            y = n / 2;
        } else {
           y = 3 * n + 1
        }
        return y in seqs ? seqs[y] + 1 : coll(y) + 1
    }

    for(let i=2; i<num; i += 10000) {
        for(let j=0; j<10000; j++) {
            if(i+j < num) seqs[i + j] = coll(i + j)
        }
        let newMax = Math.max(...Object.values(seqs))
       if(newMax > max[1]) max = [Object.keys(seqs).filter(key => seqs[key] == newMax)[0], newMax] 
       seqs = {1:0}
    }
    return max[0]
}

console.log(collatz(1000000))