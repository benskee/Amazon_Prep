// Meeting Rooms II - Medium

const minMeetingRooms = intervals => {
    if(intervals.length<=1) return intervals.length
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let rooms = [[0,0]]
    for(let x in intervals) {
        let i = intervals[x]
        if(i[0] < rooms[0][1]) {
            rooms.push(i)
        } else {
            rooms[0] = i
        }
        rooms = rooms.sort((a,b) => a[1] -b[1])
    }

    return rooms.length
}