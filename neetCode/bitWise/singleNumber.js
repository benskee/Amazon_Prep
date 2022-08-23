// Single Number - Easy

const singleNumber = nums => {
    let res = 0;
    for (let b of nums) {
        res ^= b;
    }
    return res;
}