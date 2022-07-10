let find_kth_permutation = function(v, k, result) {
    const factorial = len => {
        let total = 1
        for(let n=0; n<len; n++) {
            total *= len-n
        }
        return total
    }
    //   k needs to be k-1
    k--
    result = []
    let size = v.length
    for(let i=size-1; i>=0; i--) {
        let f = factorial(i)
        idx = Math.floor((k)/f) || 0
        result.push(v[idx])
        v = v.filter(n=> n != v[idx])
        k %= f
    }
    return result
};

console.log(find_kth_permutation([ 1, 2, 3, 4 ], 8, [ '' ]))
