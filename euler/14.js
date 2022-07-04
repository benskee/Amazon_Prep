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
}

console.log(collatz())