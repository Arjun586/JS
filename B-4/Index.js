//function declaration
function run(){
 console.log('running')
}

//function call
run();

//named function assignment
let stand = function walk() {
    console.log('walking')
}

//function call
stand();

let jump = stand;
jump();

//anonymous function assignment
let stand1 = function () {
    console.log('walking 1')
}

//function call
stand1();

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5,6));


// function add(a,b){
//     console.log(arguments);
//     return a+b;
// }

// let ans =  add(1,2,3,4,5)

// function Add(){
//     let total = 0;
//     for(let value of arguments)
//     total = total + value;
//     return total;
// }

// let Ans =  Add(1,2,3,4,5)
// console.log(Ans)

//rest operator
// function sum (...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6)

//defaults parameters
// function intrest(p,r,y=10){
//     return p*r*y/100;
// }
// console.log(intrest(1000,10,5));
// console.log(intrest(1000,10));


//getter -> access properties
//setter -> change or mutate properties

let person = {
    fName : 'love',
    lName : 'babbar',

    //getter
    get fullName(){     
        return `${person.fName} ${person.lName}`
    },

    //setter
    set fullName(value){
        let parts = value.split(' ')
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

//calling getter
console.log(person.fullName);

//calling setter
person.fullName = 'Rahul Sharma'
console.log(person.fullName)

// var has variable scope but thats not possible for let or const keyword

