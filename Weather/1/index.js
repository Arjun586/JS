console.log("hello jiii")

const API_KEY = "16894495f9edc41da12935747f67ea4b";

//one function must do one work _> BEST PRACTICE
//fetchWeatherDeatils only do API call
async function fetchWeatherDetails(){

    try{

        let city = "Mumbai";

        //API call
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log("weather data -> ", data)

        
        renderWeatherInfo(data);

    }

    catch(err){
        console.log('Error aa gya' +err)
    }
    
}


function renderWeatherInfo(data){
    
    let newPara = document.createElement('p')
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`

    document.body.appendChild(newPara)

}


async function getCustomWeatherDetails(){

    try{
        let latitude = 15.3333;
        let longitude = 74.0833;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await result.json();

        console.log(data);
    }

    catch(err){
        console.log("error aa gya", err)
    }
    
}


//geoLocation
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        console.log("geolocation is not supported")
    }

}

function showPosition(position){
    try{
        let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    console.log(lat);
    console.log(lon);
    }

    catch(err){
        console.log("error aa gya" , err)
    }
}