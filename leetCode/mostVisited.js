// Analyze User Website Visit Pattern - Medium

const mostVisitedPattern = (username, timestamp, website) => {
    let ans = []
    let users = {}
    let patterns = {}
    let max = 0

    for(let i=0; i<username.length; i++) {
        let user = username[i]
        if(users[user] != undefined) {
            users[user].push([timestamp[i], website[i]])
        } else {
            users[user] = [[timestamp[i], website[i]]]
        }
    }

    const findPatterns = visits => {
        visits.sort((a,b)=>a[0]-b[0])
        let temp = {}
        if(visits<3) return []
        for(let i=0; i<visits.length; i++) {
            for(let j=i+1; j<visits.length; j++) {
                for(let k=j+1; k<visits.length; k++) {
                    let pattern = `${visits[i][1]} ${visits[j][1]} ${visits[k][1]}`
                    if(temp[pattern] != undefined) continue
                    temp[pattern] = true
                    if(patterns[pattern] != undefined) {
                        patterns[pattern]++
                    } else {
                        patterns[pattern] = 1
                    }
                    if(patterns[pattern] > max) {
                        ans= [pattern]
                        max = patterns[pattern]
                    } else if( patterns[pattern]==max){
                        ans.push(pattern)
                    }
                }
            }
        }
    }
    for(user in users) {
        findPatterns(users[user])
    }
    if(ans.length>1) {
        ans.sort((a,b)=> a<b?-1:1)
    }
    return ans[0].split(' ')
}

// username1 = ["joe","joe","joe","james","james","james","james","mary","mary","mary"]
// timestamp1 = [1,2,3,4,5,6,7,8,9,10]
// website1 = ["home","about","career","home","cart","maps","home","home","about","career"]
// console.log(mostVisitedPattern(username1, timestamp1, website1))// ["home","about","career"]


// u1 =["ua","ua","ua","ub","ub","ub"]
// t1=[1,2,3,4,5,6]
// w1=["a","b","c","a","b","a"]
// console.log(mostVisitedPattern(u1,t1,w1))//["a","b","a"]


// u2=["dowg","dowg","dowg"]
// t2=[158931262,562600350,148438945]
// w2=["y","loedo","y"]
// console.log(mostVisitedPattern(u2,t2,w2))//["y","y","loedo"]


u3=["h","eiy","cq","h","cq","txldsscx","cq","txldsscx","h","cq","cq"]
t3=[527896567,334462937,517687281,134127993,859112386,159548699,51100299,444082139,926837079,317455832,411747930]
w3=["hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","yljmntrclw","hibympufi","yljmntrclw"]
console.log(mostVisitedPattern(u3,t3,w3))//["y","y","loedo"]