
async function mergeSort(bars, array) {
   
    let positions = Array.from({length: array.length}, (_, i) => i);
    if (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let leftPos = positions.slice(0, middle);
    let right = array.slice(middle);
    let rightPos = positions.slice(middle);

    left = await mergeSort(bars, left, leftPos);
    right = await mergeSort(bars, right, rightPos);

    return merge(bars, left, right, leftPos, rightPos);
    
}

async function merge(bars, left, right, leftPos, rightPos) {
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedPos = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            sortedPos.push(leftPos[leftIndex])
            bars[leftPos[leftIndex]].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            sortedPos.push(rightPos[rightIndex]);
            bars[rightPos[rightIndex]].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            rightIndex++;
        }
        await new Promise(resolve => setTimeout(() => { resolve() }, 20));
    }
    while (leftIndex < left.length) {
        sorted.push(left[leftIndex]);
        sortedPos.push(leftPos[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        sorted.push(right[rightIndex]);
        sortedPos.push(rightPos[rightIndex]);
        rightIndex++;
    }
    for (let i = 0; i < sorted.length; i++) {
        bars[sortedPos[i]].style.height = `${sorted[i]*5}px`;
        bars[sortedPos[i]].setAttribute("value", sorted[i]);
        bars[sortedPos[i]].style.background = 'rgb(' +204 + ',' + 255 + ',' + 0 + ')';
    }
    
}
