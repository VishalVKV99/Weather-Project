apiKey = "a0ca162a6128a3415b4e61eada96b97c";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather_icon")

async function checkWeather(city){
    const respose = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data  = await respose.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) +"°c" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) +"km/h";

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src ="images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="images/mist.png";
    }else if(data.weather[0].main == "Wind"){
        weatherIcon.src ="images/wind.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="images/snow.png";
    }
    
}
searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})