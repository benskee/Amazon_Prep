// Find Minimum in Rotated Sorted Array - Medium

const findMin = nums => {
    let min = 0
    let end = nums.length-1

    if(nums[0]<nums[end]) {
        min = 0
    } else {
        let left = 0, right = end
        while(left<right) {
            let mid = Math.ceil((left+right)/2)
            if(nums[mid] >= nums[left]) {
                if(nums[mid] > nums[mid+1]) {
                    min = mid+1
                    break
                }
                left = mid + 1
            } else {
                if(nums[mid] < nums[mid-1]) {
                    min = mid
                    break
                }
                right = mid - 1
            }
        }
    }
    return nums[min]
}