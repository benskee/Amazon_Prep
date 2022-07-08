const findMedianSortedArrays = (nums1, nums2) => {
    let arr = []
    let total = nums1.length + nums2.length
    for(let i=0; i<total; i++) {
        if(nums1.length == 0) {
            arr= [...arr, ...nums2]
            break
        }
        if(nums2.length == 0) {
            arr= [...arr, ...nums1]
            break
        }
        if(nums1[0] >= nums2[0]) {
            arr.push(nums2[0])
            nums2.shift()
        } else {
            arr.push(nums1[0])
            nums1.shift()
        }
    }
    let ans = 0;
    if(arr.length % 2 == 1) {
        ans = arr[Math.floor(arr.length/2)]
    } else {
        ans = (arr[(arr.length/2)] + arr[(arr.length/2) - 1]) / 2
    }

    return ans
}

console.log(findMedianSortedArrays([1,2], [3,4]))