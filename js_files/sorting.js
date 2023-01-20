
let array = [];

function generateBars() {
    // clear the previous set of bars
    let parent = document.getElementById("bar-container");
    parent.innerHTML = "";

    // generate new array of random numbers
    for (let i = 0; i < 50; i++) {
        array[i] = Math.floor(Math.random() * 101);
    }

    // create div elements for each number in the array
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div");
        div.classList.add("bar");
        div.style.height = array[i]*5 + "px";
        parent.appendChild(div);
    }
}

// call the function when the page is loaded
document.addEventListener("DOMContentLoaded", generateBars);

// add event listener to the button to generate new bars
let newArrayButton = document.getElementById("new-array-button");
newArrayButton.addEventListener("click", function(){
    generateBars();
    enablebuttons();
});
let bars = document.getElementsByClassName("bar");

let bubbleButton = document.getElementById("bubble");
    bubbleButton.addEventListener("click", function(){
        bubbleSort(bars, array); 
});
let selButton = document.getElementById("select");
selButton.addEventListener("click", function(){
    selectionSort(bars, array)
});
let inButton = document.getElementById("insert");
inButton.addEventListener("click", function(){
    insertionSort(bars, array)
});
let MButton = document.getElementById("merge");

MButton.addEventListener("click", function(){
    var buttons = document.querySelectorAll("#btngrp button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.remove("btn-success");
        buttons[i].classList.add("btn-warning");
    }
    mergeSort(bars, array) ;
   
});
let quickbutton = document.getElementById("quick") ;
quickbutton.addEventListener("click", function(){
    var buttons = document.querySelectorAll("#btngrp button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.remove("btn-success");
        buttons[i].classList.add("btn-warning");
    }
quickSort(bars, array, 0, array.length-1)
});