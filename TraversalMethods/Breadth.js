// Assuming it is nested in a class

function Breadth() {
    let queue = [];
    let result = [];

    if (!this.root) {
        queue.push(this.root);
        while(queue.length > 0) {
            let currentNode = queue.shift();
            result.push(currentNode);
        } if (currentNode.left) {
            queue.push(currentNode.left);
        } if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return result;
} 