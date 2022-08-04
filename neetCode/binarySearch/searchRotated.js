// Search in rotated Sorted Array - Medium

const search = (nums, target) => {
    let rotator = 0
    let end = nums.length-1
    let l = 0, r = end

    if(nums[0]<nums[end]) {
        rotator = end
    } else {
        let left = 0, right = end
        while(left<right) {
            let mid = Math.ceil((left+right)/2)
            if(nums[mid] >= nums[left]) {
                if(nums[mid] > nums[mid+1]) {
                    rotator = mid+1
                    break
                }
                left = mid + 1
            } else {
                if(nums[mid] < nums[mid-1]) {
                    rotator = mid
                    break
                }
                right = mid - 1
            }
        }
        if(nums[end] < target) {
            r = rotator
        } else {
            l = rotator
        }
    }

    while(l<=r) {
        let mid = Math.ceil((l+r)/2)
        if(nums[mid] === target) return mid
        if(nums[l] === target) return l
        if(nums[r] === target) return r
        if(nums[mid] < target) {
            l = mid+1
        } else {
            r = mid - 1
        }
    }
    return -1
}

// let n1 =[4,5,6,7,0,1,2]
let n1 =[5,1,2,3,4]
// let n1 =[1,3]
let t1= 4
console.log(search(n1,t1))