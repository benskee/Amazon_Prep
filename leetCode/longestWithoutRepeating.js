// 3. Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = s => {
    let max = 1;
    if(s.length<2) max = s.length;
    for(let i=0; i<s.length; i++) {
        let current = '';
        for(let j=0; j<s.length - i; j++) {
            if(current.includes(s[j+i])) break
            current += s[j+i]
            if(current.length>max) max = current.length;
        }
    } 
    return max
}