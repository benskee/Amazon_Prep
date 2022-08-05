// Reverse Nodes in k-Group - Hard

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const reverseKGroup = (head, k) => {
    let dummy = new ListNode(null, head)
    let start = dummy
    while(true)  {
        let section = []
        let end = start
        for(let i=0; i<k; i++) {
            end = end.next
            if(end === null) return dummy.next
            section.push(new ListNode(end.val, null))
        }
        for(let j=k-1; j>=0; j--) {
            start.next = section[j]
            start = start.next
            if(j === 0) {
                start.next = end.next
            }
        }
    }
}

let head1 = new ListNode(1, [2,3,4,5]), k1 = 2
console.log(reverseKGroup(head1, k1))