async function quickSort(bars, array, left, right) {
    if (left < right) {
        let pivotIndex = await partition(bars, array, left, right);
        await Promise.all([
            quickSort(bars, array, left, pivotIndex),
            quickSort(bars, array, pivotIndex + 1, right)
        ]);
    }
    updateBars(bars, array);
    await new Promise(resolve => setTimeout(resolve, 20));
}

async function partition(bars, array, left, right) {
    let pivot = array[left];
    let pivotIndex = left;
    bars[pivotIndex].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
    for (let i = left + 1; i < right; i++) {
        bars[i].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
        await new Promise(resolve => setTimeout(resolve, 50));
        if (array[i] < pivot) {
            pivotIndex++;
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            [bars[i], bars[pivotIndex]] = [bars[pivotIndex], bars[i]];
            bars[pivotIndex].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            bars[i].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        bars[i].style.background = 'white';
    }
    [array[left], array[pivotIndex]] = [array[pivotIndex], array[left]];
    [bars[left], bars[pivotIndex]] = [bars[pivotIndex], bars[left]];
    bars[pivotIndex].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
    bars[left].style.background = 'white';
    await new Promise(resolve => setTimeout(resolve, 10));
    return pivotIndex;
}

function updateBars(bars, array) {
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = `${array[i]*5}px`;
        bars[i].style.background = 'rgb(' +204 + ',' + 255 + ',' + 0 + ')';
    }
}
