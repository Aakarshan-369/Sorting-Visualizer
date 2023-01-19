async function selectionSort(bars, array) {
    var buttons = document.querySelectorAll("#btngrp button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.remove("btn-success");
    buttons[i].classList.add("btn-warning");
}
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            await new Promise(resolve => setTimeout(() => { resolve() }, 2));
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            bars[j].style.background = "white";
        }
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
            swap(bars[i], bars[minIndex]);
        }
        bars[i].style.background = 'rgb(' +204 + ',' + 255 + ',' + 0 + ')';
    }
    var buttons = document.querySelectorAll("#btngrp button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("btn-warning");
    buttons[i].classList.add("btn-success");
}
}
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}
