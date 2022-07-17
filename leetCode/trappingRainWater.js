// Trapping Rain Water - Hard

const trap = height => {
    let l = 0;
    let r = height.length - 1;
    let lvl = 0;
    let sum = 0;

    while (l < r) {
        let lower = 0;
        if (height[l] < height[r]) {
        lower = height[l];
        l++;
        } else {
        lower = height[r];
        r--;
        }
        lvl = Math.max(lower, lvl);
        sum += lvl - lower;
    }
    
    return sum;
}


let h1 =  [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(h1))