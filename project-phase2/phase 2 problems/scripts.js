//scripts for problems

function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';
    console.log(tbNumberToFind.value);

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    //index is 0 and as long as index is less than the total length of the span; move forward
    for (let index = 0; index < spans.length; index++) {
    //me equals that value in the spans array at the position of the variable index
        let me = spans[index];
        console.log(me);
        let myList = me.classList;
        console.log(myList);
        spans[index].classList.remove('spanHighlighted');
        spans[index].innerText
        console.log(spans[index].innerText);
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function reloadPage() {
    window.location.reload();
    return false;
}

function findInGrid() {
 //find in grid
 let tbNumberToFind = document.getElementById("tbNumberToFind");
 let numbfind = tbNumberToFind.value;
 console.log(numbfind);

 let spans = document.getElementsByTagName('span')
 console.log(spans);
 for (let index = 0; index < spans.length; index++) {
     console.log(spans[index].innerText);
     //if the value that is being searched equals tbNumberToFind, then highlight it
     if (numbfind == spans[index].innerText) {
        spans[index].classList.add('spanHighlighted');
     }
     else {
    //when value not set; unhighlight span
        spans[index].classList.remove('spanHighlighted');  
     }
 }
}

function findInList() {
   //find In List
   let tbTextToFind = document.getElementById('tbTextToFind')
   let listFind = tbTextToFind.value;
   console.log(listFind);
}

const sortarr = [
    'span1-1',
    'span1-2',
    'span1-3',
    'span2-1',
    'span2-2',
    'span2-3',
    'span3-1',
    'span3-2',
    'span3-3',   
];
console.log(sortarr);

let sortdiv = document.createElement('div');
document.getElementsByTagName(sortarr);


let test = function(a, b){return a.innerText < b.innerText};
function sortIt() {
    //put into an array, take that information and append child
    let sortIt = document.getElementsByTagName('span')
    /*console.log(sortIt);*/
    sortIt.sort(test);
}

/*let test = function(a, b){return a.innerText < b.innerText};
let a = document.createElement('span')
a.innerText = '';

let b = document.createElement('span')
b.innerText = '';

console.log(test (a, b));*/
//how do I compare the innertext of a to the innertext of b
//creat a span called a
//set a's innertext to 10
