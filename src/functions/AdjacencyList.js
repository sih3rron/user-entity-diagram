//https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/#trees

import { Shape } from "./Shape";
import { Connector } from "./Connector";



export class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addNode(node, sapId, shapes, shapecolor){
        if(!this.adjacencyList[sapId]) {
            this.adjacencyList[sapId] = []
            const shapeData = Shape(node, sapId, shapecolor);
            shapes.push(shapeData);
        } 
    }

   addConnection(node1, shape1, node2, shape2, data, connectorcolor){
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
        
        Connector(shape1, shape2, node1, node2, data, connectorcolor);
    }

    removeConnection(node1,node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2)
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1)
    }

    removeNode(node){
        while(this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop()
            this.removeConnection(node, adjacentNode)
        }
        delete this.adjacencyList[node]
    }
}

export const entityGraph = new Graph();