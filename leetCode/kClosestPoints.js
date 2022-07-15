// K Closest Points to Origin - Medium

const kClosest = (points, k) => {
    points.sort((a,b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2));
    return points.slice(0, k);
}

let p1 = [[3,3],[5,-1],[-2,4]], k1=2
console.log(kClosest(p1, k1)) // [[3,3],[-2,4]]