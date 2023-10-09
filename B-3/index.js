//creating new string as a primitive
let firstName = 'Babbar';

//Creating new string as a object
let lastName = new String('Babbar');

let date = new Date()

console.log(date)


//Arrays
let numbers = [1,2,3,4]
console.log(numbers);
//searching
console.log(numbers[2])
console.log(numbers.indexOf(4))

//insert in end
numbers.push(9)
console.log(numbers)

//insert in begin
numbers.unshift(8)
console.log(numbers)

//insert in middle
numbers.splice(2,0,6)
console.log(numbers)

//remove from end
numbers.pop()
console.log(numbers)

//remove from begin
numbers.shift()
console.log(numbers)

//remove from middle
numbers.splice(1,1)
console.log(numbers)

//we want to check if number is present
console.log(numbers.includes(7))
console.log(numbers.includes(2))

//empty
numbers.length =0
console.log(numbers)

//Array of object
let courses =[
    {no:1, naam:'love'},
    {no:2, naam:'babbar'}
]

console.log(courses)

//searching using arrow funtion
console.log(courses.find((course) =>  course.naam === 'love')
)

//combining two array
let first = [1,2,3]
let second = [4,5,6]

let combined = first.concat(second)
console.log(combined)

console.log(combined.slice(2,4))

