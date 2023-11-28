export function dfs(node, data){
    
    const visited = new Set();

    visited.push(node);

    const ids = data[0].sapID

    for(const id of ids){
        console.log()
        if(id == "S197"){
            console.log("Found S197")
            return;
        }

        if(!visited.has(id)){
            dfs(id, graph);
        }

    }
}