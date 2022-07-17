const mergeKLists = lists => {
const ListNode = (val, next) => {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
    let values = []
    lists.forEach(ll =>{
        while(ll.size) {
            values.push(ll.val)
            ll = ll.next
        }
    })
    values.sort((a,b)=>a-b)
    let ans = new ListNode(values[0], null)

    for(let i=1; i<values.length; i++) {
        ans.next = values[i]
    }

    return ans
}