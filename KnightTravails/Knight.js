class createRoot {
    constructor(position) {
        // this.position = position;
        this.topLeftSide = null;
        this.topLeftTop = null;
        this.topRightSide = null;
        this.topRightTop = null;
        this.lowLeftSide = null;
        this.lowLeftTop = null;
        this.lowRightSide = null;
        this.lowRightTop = null;
        this.right = null;
    }
}

class KnightTravails {
    constructor(position) {
        this.board = () => {
            const squareBoard = [];
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    squareBoard.push([i, j]);
                }
            } 
           return squareBoard;
        }  
    }

    graph() {
        const adjList = []
        this.board().forEach(e => {
            const edges = [];
            const [row, column] = e;

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
                    edges.push([newRow, newColumn]);
                }
            });

            adjList.push(edges);
        })
        return adjList;
    }


    KnightMove(position) {
        const newNode = new createRoot(position)
    }

    LowerRoute() {
    }
}

const teste = new KnightTravails;

console.log(teste.graph());

