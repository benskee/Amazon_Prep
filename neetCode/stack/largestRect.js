// Largest Rectangle in Histogram - Hard


//          #### NEETCODE SOLUTION ####
// var largestRectangleArea = function (heights) {
//     let largestArea = 0;
//     let stack = [];

//     for (let i = 0; i < heights.length; i++) {
//         let start = i;

//         while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
//             let [lastI, lastH] = stack.pop();
//             largestArea = Math.max(largestArea, lastH * (i - lastI));
//             start = lastI;
//         }

//         stack.push([start, heights[i]]);
//     }

//     for (let j = 0; j < stack.length; j++) {
//         let currArea = stack[j][1] * (heights.length - stack[j][0]);
//         largestArea = Math.max(largestArea, currArea);
//     }

//     return largestArea;
// };




const largestRectangleArea = heights => {
    let max = 0
    for(let i=0; i<heights.length; i++) {
        let count = 1
        let h = heights[i]
        if(h === heights[i+1]) {
            continue
        }
        let heigher = true
        let j = i
        while(j>0 && heigher) {
            if(heights[j-1] >= h) {
                count++
                j--
            } else {
                heigher = false
            }
        }
        heigher = true
        j = i

        while(j<heights.length-1 && heigher) {
            if(heights[j+1] >= h) {
                count++
                j++
            } else {
                heigher = false
            }
        }
        if(count * h > max) max = count * h
    }

    return max
}

let h1 = [2,1,5,6,2,3]
console.log(largestRectangleArea(h1))