// //promise -> for parallel execution
// //this is for async code

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('I am inside promise1')
//     }, 5000);
//     resolve('bhaisahab chl gya')
// })










// //handling resolve
// //then
// meraPromise1.then((value) => { console.log(value)})

// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('I am inside promise2')
//     }, 3000);
//     reject(new Error('bhaisahab error aayee hai'))
// })









// //handling error
// //catch
// //can be done by then
// meraPromise2.catch((value) => (console.log('sir ji error aa gya')));

// console.log('phela')













// let wadda1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('setTimeout1 stated');
//     },3000);
//     resolve(true)
// })

// let output = wadda1.then(() => {
//     let wadda2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('setTimeout2 stated');
//         },5000);
//         resolve('wadda 2 ho gya');
//     })
//     return wadda2;
// })

// output.then((value) => console.log(value))














//Async-await
// async function abcd(){
//     return "kya hall hai dosoto";
// }


// async function utility(){

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("delhi me bhout garmi hai");
//         },1000);
//     });
    
//     let mumbaiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Mumbai me bhout baris hai");
//         },2000);
//     });

//     let dM = await delhiMausam;
//     let mM = await mumbaiMausam;
    
//     return(dM, mM);

// }









//fetch API
//send and recive to network


//to retrive 
// async function utility(){
//     let content =await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     //json is javaScript object notation
//     let output = await content.json();
//     console.log(output);
// }



//creating a resourse
//post call
//use google

// async function helper(){
// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title:'babbar',
//         body: 'tkdi hai',
//         userId: 191111,
//     }),
//     headers: {
//         'Content-type': 'aplication/json; charset=UTF-8',
//     },
// };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options );
//     let response = await content.json();
//     return response;
// }

// async function utility(){
//     let ans =  helper();
//     console.log(ans);
// };

// utility();


//closures inm nested fuctions
// a is unefined b'coz of var scope but closures give morzilla
function init(){
    let name = "Morzilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let a = init();
a()