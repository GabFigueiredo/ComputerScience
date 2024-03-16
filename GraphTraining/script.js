class SocialMedia {
    constructor() {
        this.names = ["Audrey", "Bill", "Jeff", "Llana", "Cathy", "Harry", "Dave", "Gayle", "Emily", "Frank"];
        this.adjList = this.adjList();
    }

    adjList() {
        const result = [
                       [1, 3, 7], // Audrey 0
                       [0, 2, 7, 8], // Bill 1
                       [1, 5, 8], // Jeff 2
                       [5, 0, 6],// Llana 3
                       [7, 8], // Cathy 4
                       [3, 2], // Harry 5
                       [3, 8, 9], // Dave 6
                       [0, 1, 4], // Gayle 7
                       [1, 2, 4, 6, 9], // Emily 8
                       [8, 6] // Frank 9
                    ]
        return result;
    }

    BuildBFSInfo(start) {
        const result = [];
        for (let i = 0; i < this.names.length; i++) {
            result[i] = {
                distance: null,
                predecessor: null
            }
        }
        result[start].distance = 0;
        return result;
    }

    findIndex(name) {
        for (let i = 0; i < this.names.length; i++) {
            if (this.names[i] === name) {
                return i;
            }
        }
        return null;
    }

    findName(index) {
        return this.names[index];
    }

    BreadthFirst(start, end) {
        const startIndex = this.findIndex(start);
        const endIndex = this.findIndex(end);
        const adjList = this.adjList;
        const BFSInfo = this.BuildBFSInfo(startIndex);
        let queue = [];
        let visited = [];
        queue.push(startIndex);
        
        while (queue.length > 0) { 
            let current = queue.shift();
            visited.push(current);
            for (let i = 0; i < adjList[current].length; i++) {
                if (adjList[current][i] === endIndex) {
                    console.log("Rodada fim")
                    BFSInfo[adjList[current][i]].distance = BFSInfo[current].distance + 1;
                    BFSInfo[adjList[current][i]].predecessor = current;
                    let path = [];
                    let element = BFSInfo[adjList[current][i]];
                    path[0] = adjList[current][i];
                    console.log(BFSInfo)
                    while (element.predecessor) { 
                        path.push(element.predecessor);
                        element = BFSInfo[element.predecessor];
                    }
    
                    const orderPath = path.reverse();
                    const pathNames = [];
                    orderPath.forEach(index => {
                        pathNames.push(this.findName(index)); 
                    })
                    
                    return console.log(`Você fez em ${BFSInfo[i].distance} movimentos. ` + `O caminho é igual a ${pathNames}.`);
                } else {
                    if (visited.includes(adjList[current][i])) {
                    } else {
                        queue.push(adjList[current][i]);
                        BFSInfo[adjList[current][i]].distance = BFSInfo[current].distance + 1;
                        BFSInfo[adjList[current][i]].predecessor = current;
                        visited.push(adjList[current][i])
                    }
                }
            }
        }
    }
}

const teste = new SocialMedia()

teste.BreadthFirst("Audrey", "Cathy"); // Audrey, Gayle, Cathy