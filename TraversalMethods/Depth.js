// Assuming it is nested in a class

function Depth(node, result = []) {
    if (!node) {
        return;
    }
    // Pre-order
    result.push(node.data);
    Depth(node.left, result);
    Depth(node.right, result);

    // In-order
    Depth(node.left, result);
    result.push(node.data);
    Depth(node.right, result);

    // Post-order
    Depth(node.left, result);
    Depth(node.right, result);
    result.push(node.data);

    // Chose one

    return result;
}