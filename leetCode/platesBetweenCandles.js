// Plates Between Candles - Medium

const platesBetweenCandles = (s, queries) => {
    class Node {
        constructor(candles, pre_candle, next_candle){
            this.candles = candles != null ? candles : 0
            this.pre_candle = pre_candle
            this.next_candle = next_candle
        }
    }

    let node_list = []
	
    // build the node with required infomation for each position
    let pre = null // the position of bar
    let candles = 0
	
    // find pre_candle index for each position
    for (let i = 0; i<s.length; ++i) {
        if (s[i] == '|') {
            ++ candles
            pre = i
        }
        node_list.push(new Node(candles, pre, null))
    }
	
    let next = null
    // find next_candle index for each position
    for (let i = s.length - 1; i>=0; --i) {
        if (s[i] == '|') next = i 
        node_list[i].next_candle = next
    }
     
    let ans = []
    for (const query of queries) {
        const left = query[0], right = query[1]
        const left_most_bar = node_list[left].next_candle //index
        const right_most_bar = node_list[right].pre_candle
        // invalid case:
        if (left_most_bar >= right_most_bar) ans.push(0)
        else if (left_most_bar == null || right_most_bar == null) ans.push(0)
        // valid case:
        else ans.push(right_most_bar - left_most_bar - 1 - (node_list[right_most_bar].candles - node_list[left_most_bar].candles - 1))
    }
    return ans
}

let s1 = "**|**|***|"
let q1 = [[2,5],[5,9]]
// console.log(platesBetweenCandles(s1, q1)) //[2,3]

let s2 = "|||||*|||*|||*||||*||||**|*|||**|**||**|||*|||*||***||*|*||"
let q2 = [[7,52],[1,55],[4,52],[0,56],[28,34],[6,56],[19,56],[1,29],[2,54],[6,52],[1,58],[2,58],[8,50],[5,51],[6,55],[2,51],[18,39],[3,51],[4,54],[5,58],[6,54],[8,58],[16,55],[3,58],[5,52],[0,53],[6,53],[11,18],[0,51],[6,57],[0,9],[8,53],[5,53],[4,58],[2,53],[7,55],[2,55],[6,58],[1,57],[6,50],[5,50],[7,20],[3,50],[3,52],[7,53],[7,51],[5,39],[0,50],[5,54],[1,52],[0,57],[6,11],[2,50],[4,51],[1,50],[30,49],[11,51],[7,54],[8,51]]

let q3 = [[0,56]]

console.log(platesBetweenCandles(s2, q2)) //[17,19,18,19,2,18,15,7,18,17,20,20,14,14,18,15,9,15,18,19,17,19,16,20,17,18,17,1,15,19,1,17,17,20,18,18,19,19,20,14,14,3,15,18,17,14,12,15,17,18,20,1,15,15,15,6,13,17,14]
