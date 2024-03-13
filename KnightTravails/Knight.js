class Node {
    constructor(position) {
        this.position = position;
        this.edges = [];
    }
}

class KnightTravails {
    constructor() {
        this.board = this.createBoard();
        this.graph();
    }

    createBoard() {
        const squareBoard = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const newSquare = new Node([i, j])
                squareBoard.push(newSquare);
            }
        } 
        return squareBoard;
    }

    graph() {
        const squares = this.board;
        let adjList = [];
        squares.forEach(e => {
            const edges = [];
            const [row, column] = e.position;

            const moves = [
                [row + 1, column - 2],
                [row + 1, column + 2],
                [row + 2, column - 1],
                [row + 2, column + 1],
                [row - 1, column - 2],
                [row - 1, column + 2],
                [row - 2, column - 1],
                [row - 2, column + 1]
            ];

            moves.forEach(([newRow, newColumn]) => {
                if (newRow >= 0 && newRow < 8 && newColumn >= 0 && newColumn < 8) {
                    const newIndex = this.findIndex([newRow, newColumn]);
                    edges.push(newIndex);
                }
            });
            adjList.push(edges)
        })
        return adjList
    }

    findIndex(value) {
        const graph = this.board;
        for (let i = 0; i < graph.length; i++) {
            const nodePosition = graph[i].position;
            if (nodePosition[0] === value[0] && nodePosition[1] === value[1]) {
                return i;
            }
        }
        return null;
    }

    buildInfoArr(boardArr, startIndex) {
        let newArr = [];
        for (let i = 0; i < boardArr.length; i++) {
            newArr[i] = {
                distance: null,
                predecessor: null,
            }
        }
        newArr[startIndex].distance = 0;
        console.log(newArr);
        return newArr;
    }

    constructPath(board, infoArr, item, index, newArr) {
        if (item.predecessor === null) return;
        if (item.predecessor != null) {
            newArr.push(board[index]);
            this.constructPath(board, infoArr, infoArr[item.predecessor], item.predecessor, newArr);
        }
    }

    KnightMoves(start, end) {

        let board = this.board;
        const startIndex = this.findIndex(start);
        const endIndex = this.findIndex(end);
        let bfsInfo = this.buildInfoArr(board, startIndex);
        let adjList = this.graph();
        let queue = [startIndex];
        let u;

        while(u != endIndex) {
            u = queue.shift();

            
            for (let i = 0; i < adjList[u].length; i++) {
                let vIndex = adjList[u][i];
                console.log(vIndex)
                if (vIndex === endIndex) {
                    bfsInfo[vIndex].predecessor = u;
                    let path = [];
                    this.constructPath(board, bfsInfo, bfsInfo[vIndex], vIndex, path);
                    let result = path.reverse().splice(0,0, start);
                    console.log(`You made it in ${path.length - 1} move! Here's your path: ${result}`);
                    return path
                } else {
                    if (bfsInfo[vIndex].distance === null) {
                        bfsInfo[vIndex].distance = bfsInfo[u].distance + 1;
                        bfsInfo[vIndex].predecessor = u;
                        queue.push(vIndex);
                    }
                }
            }
        }
    }
}

// Da próxima vez, liste as arestas por seu index
// Entenda o conceito de distance e predecessor

const teste = new KnightTravails;

console.log(teste.findIndex([0, 0]));



