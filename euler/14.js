// Longest Collatz sequence

const collatz = () => {
    let chains = {};
let chain = [];
let max = 999999;
let previousChainLength = 0;
let longestChainLength = 0;
let longestChainValue = 0;
for (i = 1; i <= max; i++) {
  let v = i;
  while (v > 1) {
    if (chains[v] != undefined) {
      previousChainLength = chains[v] - 1;
      break;
    }
    if (v % 2 == 0) {
      v /= 2;
    }
    else {
      v = 3 * v + 1;
    }
    chain.push(v);
  }
  while (chain.length > 0) {
    if (chain.length + previousChainLength > longestChainLength) {
      longestChainLength = chain.length + previousChainLength;
      longestChainValue = i;
    }
    chains[chain[0]] = chain.length + previousChainLength;
    chain.shift();
  }
}
return longestChainValue










    // let seqs = {1: 0};
    // let max = [1, 0];

    // const coll = n => {
    //     let y = 1;
    //     if(n % 2 == 0) {
    //         y = n / 2;
    //     } else {
    //        y = 3 * n + 1
    //     }
    //     return y in seqs ? seqs[y] + 1 : coll(y) + 1
    // }

    // for(let i=2; i<num; i += 10000) {
    //     for(let j=0; j<10000; j++) {
    //         if(i+j < num) seqs[i + j] = coll(i + j)
    //     }
    //     let newMax = Math.max(...Object.values(seqs))
    //    if(newMax > max[1]) max = [Object.keys(seqs).filter(key => seqs[key] == newMax)[0], newMax] 
    //    seqs = {1:0}
    // }
    // return max[0]
}

console.log(collatz())