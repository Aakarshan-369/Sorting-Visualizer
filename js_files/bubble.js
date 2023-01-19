

async function bubbleSort(bars, array) {
    

    
    var buttons = document.querySelectorAll("#btngrp button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.remove("btn-success");
    buttons[i].classList.add("btn-warning");
}

             
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            bars[j + 1].style.background = 'rgb(' +255 + ',' + 0 + ',' + 0 + ')';
            await new Promise(resolve => setTimeout(() => { resolve() }, 2));
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap(bars[j], bars[j + 1]);
            }
            bars[j].style.background = "white";
            bars[j + 1].style.background = "white";
        }
        bars[array.length - i - 1].style.background = 'rgb(' +204 + ',' + 255 + ',' + 0 + ')';
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
