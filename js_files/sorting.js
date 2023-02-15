// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1,el2) {
    console.log('In swap()');
    
    
   let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
// function disableSizeSlider(){
//     document.querySelector('#size_input').disabled = true;
// }

// // Enables size slider used in conjunction with disable
// function enableSizeSlider(){
//     document.querySelector('#size_input').disabled = false;
// }

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

/**
 * your task is to add event listener to the size slider and create new array using createNewArray(size) function
 */
// Selecting size slider from DOM
let arraySize = document.querySelector('#size_input');

console.log(arraySize.value);
//let arraySize=document.getElementById('size_input');
let noOfBars=arraySize.value;

// add Event listener to update the bars on the UI
arraySize.addEventListener('change', ()=>{createNewArray(document.querySelector('#size_input').value)});
console.log(noOfBars);
//function rangefn(val){
  //  createNewArray(val);
    //console.log(val);
//}



// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];
//createNewArray();

// Call to display bars right when you visit the site


// To create new array input size of array
/**
 * Complete this method to create Bars of random heights
 */
function createNewArray(noOfBars=100) {
    // calling helper function to delete old bars from dom
   
    deleteChild();

    // create an array of random numbers 
    let array = [];
    
    for (let i = 0; i <101; i++) {
        let r=Math.floor(Math.random()*100);
        array.push(r);
    }
    // select the div #bars element
    const bars = document.querySelector("#bars");
    //let parent = document.querySelector(".flex-container");

    // create multiple element div using loop and adding class 'bar col'
    
    for (let i = 0; i < noOfBars; i++) {
        //create element
        // update height of bar
        // add appropriate styling class to the element
        // add element to the DOM by appending to the div #bars
       

        let div_ele = document.createElement('div');
        div_ele.style.height = `${array[i]*5}px`;
        bars.appendChild(div_ele);
    
         div_ele.classList.add('childBars');

    }
    
    }


// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector(".flex-container");
    //let parent = document.querySelector(".flex-container");
    bar.innerHTML = '';
    //parent.innerHTML="";

}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});