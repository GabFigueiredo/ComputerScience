function MergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const leftSide = MergeSort(left);
    const rightSide = MergeSort(right);

    return Merge(leftSide, rightSide);

}

function Merge(left, right) {
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            merged.push(leftIndex[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    merged = merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    return merged;

}

console.log(MergeSort([9, 8, 7, 6, 5, 4, 3, 2]));
// Output: 2, 3, 4, 5, 6, 7, 8, 9