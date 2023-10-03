const inputBox = document.querySelector('.input-box');
const weatherimg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.wind-speed');
const searchBtn = document.getElementById('searchBtn');

const weatherbody = document.querySelector('.weatherbody');
const notfound = document.querySelector('.notfound');



async function getWeatherInfo(city) {


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e700bc3081b1f8b93b22eef9d51de646`;

    const data = await fetch(`${url}`).then(response => response.json());

    console.log(data);

    if (data.cod === `404`) {

        console.log("city not found");
        notfound.style.display = "flex";
        weatherbody.style.display = "none";
        return;
    }

    notfound.style.display = "none";
    
    weatherbody.style.display = "flex";

    temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";

    description.innerHTML = data.weather[0].description;

    humidity.innerHTML = data.main.humidity + " %";

    windspeed.innerHTML = data.wind.speed;


    switch (data.weather[0].main) {
        case 'Clouds': weatherimg.src = "assets/cloud.png";
            break;
        case 'Clear': weatherimg.src = "assets/clear.png";
            break;
        case 'Rain': weatherimg.src = "assets/rain.png";
            break;
        case 'Mist': weatherimg.src = "assets/mist.png";
            break;
        case 'Snow': weatherimg.src = "assets/snow.png";
            break;
        case 'Haze': weatherimg.src = "assets/haze.png";
            break;
    }



}


searchBtn.addEventListener('click', () => {
    getWeatherInfo(inputBox.value);
})



