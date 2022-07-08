// https://javascript.plainenglish.io/breadth-first-breath-first-search-482eb6ec7c3c

edges = [
['myhouse', 'momanddad'],
['momanddad', 'niece1'],
['momanddad', 'nephew'],
['myhouse', 'inlaws'],
['inlaws', 'kid2'],
['inlaws', 'kid1']
]
vertices = [
{name: 'myhouse', distance: null, predecessor: null},
{name: 'momanddad', distance: null, predecessor: null},
{name: 'inlaws', distance: null, predecessor: null},
{name: 'niece1', distance: null, predecessor: null},
{name: 'nephew', distance: null, predecessor: null},
{name: 'kid1', distance: null, predecessor: null},
{name: 'kid2', distance: null, predecessor: null}
]

const findNode = (nodeName, vertices) => {
    return vertices.find(vertex=> vertex.name == nodeName)
}

const findAdjacent = (nodeName, vertices, edges) => {
     let adjacentNames = edges.filter(edge => edge.includes(nodeName)).map(edge => edge.filter(
         node => node != nodeName)[0])
         
     return adjacentNames.map(name =>
          findNode(name, vertices)).filter(node =>
              node.distance == null)
}

const explored = (node, adjacentNodes) => {
     const current = node
     adjacentNodes.forEach(node => {
          node.distance = current.distance + 1
          node.predecessor = current
     })
     return adjacentNodes
}

const bfs = (startingNode, vertices, edges) => {
     startingNode.distance = 0
     let queue = [startingNode]
     let discovered = [startingNode]
     
     while(queue.length != 0){
          let currentNode = queue.shift()
          let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
          discovered = discovered.concat(adjacentNodes);
          explored(currentNode, adjacentNodes)
          queue = queue.concat(adjacentNodes)
     }
     return discovered
}

console.log(bfs(vertices[0], vertices, edges))