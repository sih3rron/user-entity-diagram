export function adjacency(uniqueKeys, fulldata){

const adjacencyList = new Map();

function addNode(id){
    adjacencyList.set(id, []);
}

function addEdge(parent, child){
    adjacencyList.get(parent).push(child);
    adjacencyList.get(child).push(parent);
}

uniqueKeys.forEach(key => {addNode(key[1])});

data.forEach(element => {
    element => addEdge(...element)
});

}

