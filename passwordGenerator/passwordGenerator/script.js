const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck  = document.querySelector("#uppercase");
const lowercaseCheck  = document.querySelector("#lowercase");
const numbersCheck  = document.querySelector("#numbers");
const symbolsCheck  = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '`~!@#$%^&*()_-+=|/{}[]:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();


//set the length of password according to slider
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow
}

function getRndInteger(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent(){
 
    try{
        await navigator.clipboard.writeText(passwordDisplay.value)
        copyMsg.innerText = "copied";
    }

    catch{
        copyMsg.innerText = "failed";
    }

    //to make copy wala span visible use in CSS
    copyMsg.classList.add("active")

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },1000);

}



function handleCheckBoxChange(){
    checkCount =0 ;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked){
            checkCount++;
        }
    })

    //specical condition
    if(passwordLength < checkCount ){
        passwordLength = checkCount;
        handleSlider();
    }

}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

//adding event listner on slider
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

//addding event listner on copybtn
copyBtn.addEventListener('click' ,() =>{
    if(passwordDisplay.value){
        copyContent();
    }
})

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //finding j using random funtion
        const j = Math.floor(Math.random() * (i + 1));
        //for swap
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
    



generateBtn.addEventListener('click',() =>{
    //none of checkbox is checked
    if(checkCount == 0){
        return;
    }
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //lets start the journey to find new password


    console.log('Starting journey')



    //remove old password
    password = "";

    //lets put the stuff mentioned by checked boxes
    // if(uppercaseCheck.checked){
    //     password += generateUpperCase;
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase;
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber;
    // }
    // if(symbolsCheck.checked){
    //     password += generateSymbol;
    // }

    let funcArr = [];

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase)
    }
    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funcArr.push(generateSymbol)
    }    

    //compulsory addition
    for(let i=0 ; i<funcArr.length ; i++){
        password += funcArr[i]();
    }

    console.log('compulsory addition done')

    //remaining addtion
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }


    console.log('remaining addition done')



    //lets shuffle password
    password = shufflePassword(Array.from(password));




    console.log('shuffle Done')



    //showing 
    passwordDisplay.value = password;


    console.log('UI addition done')

    //calculation str
    calcStrength();

})