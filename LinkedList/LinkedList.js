class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.index = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }
    
    append(data) {
        const newNode = new Node(data);
        if(this.root === null) {
            newNode.index = 0;
            this.root = newNode;

        } else {
            const lastIndex = this.size() - 1;
            newNode.index = lastIndex + 1;
            const lastNode = this.at(lastIndex);
            lastNode.next = newNode;
        }
    }
    
    prepend(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            newNode.index = 0;
            this.root = newNode;
        } else {
            function incrementIndex(node) {
                if (node === null) {
                    return;
                }
                node.index += 1;
                return incrementIndex(node.next)
            }
            incrementIndex(this.root)
    
            newNode.next = this.root;
            newNode.index = 0;
            this.root = newNode;
        }
    }
s
    size() {
        function size(node, value = 0) {
            if(node === null) {
                return value;
            }
            value += 1
            return size(node.next, value);
        }
        return size(this.root)
    }

    at(target) {
        function at(node) {
            if(node === null) {
                return;
            }
            if (node.index === target) {
                return node;
            }
            
            return at(node.next)
        }
        return at(this.root) 
    }

    head() {
        return this.root;
    }

    tail() {
        const lastIndex = this.size(this.root) - 1;

        function findLast(node, target) {
            if(node === null) {
                return;
            }
            if(node.index === target) {
                return node;
            }

            return findLast(node.next, target);
        }

        return findLast(this.root, lastIndex)
    }

    pop() {
        const lastIndex = this.size() - 2;
        const lastNode = this.at(lastIndex)
        lastNode.next = null;
    }

    contains(data) {
        function contains(node, target) {
            if (node === null) {
                return false;
            }

            if (node.data === target) {
                return true;
            }

            return contains(node.next, target);
        }

        return contains(this.root, data)
    }

    find(data) {
        function find(node, target) {
            if (node === null) {
                return null;
            }

            if (node.data === target) {
                return node.index;
            }

            return find(node.next, target);
        }

        return find(this.root, data)
    }

    toString() {
        function toString(node) {
            if (node === null) {
                return;
            }
            return `${node.data} -> ${toString(node.next)}`
        }

        return console.log(`${toString(this.root)}`);
    }

}

const myList = new LinkedList;

myList.append(7); // Adds node 7 (to end)
myList.append(6); // Adds node 6 (to end)
myList.prepend(4); // Adds node 4 (to start)
// myList.size() -> Tell you the size of the list.
// myList.at(index) -> Find a node by its index.
// myList.head() -> Tell you the root of the list.
// myList.pop() -> Removes the last element of the list.
// myList.contains() -> Returns true if the passed in value is in the list and otherwise returns false.
// myList.find(data) -> Find a node by its data.
myList.toString(); // Outpot: 4 -> 7 -> 6 -> undefined
