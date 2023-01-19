async function insertionSort(bars, array) {
    var buttons = document.querySelectorAll("#btngrp button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.remove("btn-success");
        buttons[i].classList.add("btn-warning");
    }
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let currentBar = bars[i];
        let j = i - 1;
       
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j]*5}px`;
            bars[j + 1].setAttribute("value", array[j]);
            bars[j].style.background ='rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            await new Promise(resolve => setTimeout(() => { resolve() }, 20));
            j--;
            bars[j + 1].style.background = "white";
        }
        array[j + 1] = current;
        bars[j + 1].style.height = `${current*5}px`;
        bars[j + 1].setAttribute("value", current);

    }
    for (let i = 0; i < array.length; i++) {
        
        bars[i].style.background = 'rgb(' +204 + ',' + 255 + ',' + 0 + ')';
    }
    var buttons = document.querySelectorAll("#btngrp button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("btn-warning");
    buttons[i].classList.add("btn-success");
}
}
