var partitionLabels = function(s) {
    let lastIndexMap = new Map();
    
    for(let i=0; i < s.length; i++) {
        lastIndexMap.set(s[i], i);
    }
    
    let result = [];
    let size = 0; 
    let end = 0;
    
    for(let j=0; j < s.length; j++) {
        size += 1;
        end = Math.max(end, lastIndexMap.get(s[j]));
        
        if(j==end) {
            result.push(size);
            size = 0;
        }            
    }
    
    return result;
};




const partitionLabels = s => {
    let ans = []
    let letters = Array.from(new Set(s))
    let lastIndexes = {}
    let start = 0
    let end = 0
    letters.forEach(l => lastIndexes[l] = [s.indexOf(l), s.lastIndexOf(l)] )
    for(let i=0; i<letters.length; i++) {
        let current = lastIndexes[letters[i]]
        if(current[0]>end) {
            ans.push(end - start+1)
            start = current[0]
            end =  current[1]
        } else if(current[1]>end) end = current[1]
        if(end == s.length-1) {
            ans.push(end - start+1)
            break
        }
    }
    return ans
}


const s1 = 'ababcbacadefegdehijhklij' // [9,7,8]
console.log(partitionLabels(s1))

