const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");



let oldTab = userTab;
const API_KEY = "16894495f9edc41da12935747f67ea4b";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab){
    //if we click diffrent tab
    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");
        

        //kya search form wala container invisible if yes then make it visible
        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }

        else{
            //ma phle search wale tab pr tha ab your weather walw tab visible krna hai
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //abb me your weather wale tab me aa gya hu to weather display krna hoga 
            //so let's check local storgae for coordinates
            getfromSessionStorage();
        }

    };
};


userTab.addEventListener("click",() =>{
    //pass clicked tab as input
    switchTab(userTab);
});

searchTab.addEventListener("click",() =>{
    switchTab(searchTab);
});

// check if coordinates are present in local storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //grant access wali window dikhani hai 
        grantAccessContainer.classList.add("active");   
    }
    else{
        const coordinates = JSON.parse(localCoordinates)
        fetchUserWeatherInfo(coordinates);
    }
};


async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;
    //make grant container invisible
    grantAccessContainer.classList.remove("active");
    //make loading screen visible
    loadingScreen.classList.add("active");

    //api call
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        //removing loading screen
        loadingScreen.classList.remove("active");
        //adding user weather info
        userInfoContainer.classList.add("active");

        // rendering the info to show
        renderWeatherInfo(data);
    }

    catch(err){
        loadingScreen.classList.remove("active")
        alert("Sorry for inconvenience\nSome unexpected error has occur. Please try again")
        console.log('error aa gya ->' +err);
    }

}

function renderWeatherInfo(weatherInfo){

    //fetch the elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]")
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]")
    const cloudiness = document.querySelector("[data-cloudiness]")

    //fetch values from api and put in ui element
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https:/flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`
    desc.innerHTML = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windSpeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
 
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        alert("Can't acces your location")
        console.log("geolocation is not supported")
    }

}
function showPosition(position){
    const userCoodinates ={
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoodinates));
    fetchUserWeatherInfo(userCoodinates);
}

grantAccessButton.addEventListener("click",getLocation);

const searchInput = document.querySelector("[data-searchInput]")

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;


    if(cityName ===""){
        return;
    }
    else{
        
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        
    }


    catch(err){
        alert("Sorry for inconvenience\nSome unexpected error has occur. Please try again")
        console.log('error aa gya ->' +err);
    }
}