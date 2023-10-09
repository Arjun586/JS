console.log('hello jii')


let  rectangle ={
    lenght: 3,
    breath: 2,

    draw: function() {
        console.log('Draw');
    }

};


// Creating Object Using Factory funtion
function createRectangle(len, bre) {
   
    return  rectangle ={
        lenght: len,
        breath: bre,
    
        draw: function() {
            console.log('Draw');
        }
    
    };
    
};

// //funtion call
let rectangleObj1 = createRectangle(5,4);
let rectangleObj2 = createRectangle(9,8);
let rectangleObj3 = createRectangle(4,2);

//Construtor funtion
//Pascal Notation -> first letter of every word is capital = -> NumberOfMarksWithPhysic
function Rectangle() {
    this.lenght =1;
    this.breath =2;
    this.draw= function(){
        console.log('drawing');
    }
}

//funtion call
let rectangleObject = new Rectangle();

//adding 
rectangleObject.color = 'yellow';
console.log(rectangleObject);

//removing
delete rectangleObject.color;
console.log(rectangleObject);

//construtor property 
let Rectangle1 = new Function ('length' , 'breadth' ,` 
this.lenght =1;
this.breath =2;
this.draw= function(){
    console.log('drawing');
}
`)

let rect = new Rectangle1(2,3);
console.log(rect);

let rectangle1 = {
    length:2,
    breadth:3
}

//for-in loop
for(let key in rectangle1){
    console.log(key,rectangle1[key]);
}

let rectangle2 = {
    length:2,
    breadth:3
}

//for-of loop
//we can't use object directly in for-of loop 
//we can use itreables like -> arrays, maps etc directly
for(let key of Object.keys(rectangle2)){
    console.log(key);
}
for(let key of Object.entries(rectangle2)){
    console.log(key);
}

if('length' in rectangle2){
    console.log('Present')
}
else{
    console.log('Absent')
}

//Object Cloning Using iteration
let src = {
    a:10,
    b:29,
    c:34,
    d:32
}

let dest = {};

for(let key in src){
    dest[key] = src[key];
}

console.log(dest)

//Object cloning using assign
let dest1 = Object.assign({}, src);

console.log(dest1)

//Object cloning using Spread
let dest2 = {...src}

console.log(dest2)