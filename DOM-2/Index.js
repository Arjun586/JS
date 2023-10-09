// //adding 100 para

//100 reflow and 100 repaint

const t1 = performance.now();

for(let i= 1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' +i;

    document.body.appendChild(newElement);
}

const t2 = performance.now();

console.log('this took ' +(t2-t1) +'ms');














//optiminzing a bit
const t3 = performance.now(); 
let myDiv = document.createElement('div');

for(let i=1; i<=100;i++){

    let element = document.createElement('p');
    element.textContent = 'this is para' +i;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();

console.log('this took ' + (t4-t3) +'ms');





















//Using document fragment
//document fragment -> a light weight document without any reflow and repaint
//best practice 

const t5 = performance.now();

let fragment = document.createDocumentFragment();
for(let i=1; i<=100 ; i++){

    let newElement = document.createElement('p');
    newElement.textContent = 'this is para '+i;

    fragment.appendChild(newElement);

}

document.body.appendChild(fragment); // 1 reflow and 1 repaint

const t6 = performance.now();

console.log('this took ' +(t6-t5) + 'ms' );


//single threading -> 1 command at a time 
// JS is a sindle-threaded lang.











//Event loop
//synchronous -> occuring at the same time ex-> console.log(), etc
//asynchronous -> not occuring at same time ex-> click, setTimeout,etc
//async code depend on js event loop
//asyn code is handle by browser
//whenever calll stack is empty code moves from queue to callstack and then exicute



//IMPORTANT 
//setTimeout()
//it won't run until call-stack gets empty
//setTimeout( function() , minTime(ms) )
