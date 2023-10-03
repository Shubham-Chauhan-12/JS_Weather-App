const inputBox = document.querySelector('.input-box');
const weatherimg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description= document.querySelector('.description');
const humidity= document.querySelector('.humidity');
const windspeed= document.querySelector('.wind-speed');
const searchBtn = document.getElementById('searchBtn');



async function getWeatherInfo(city){

    const api= "e700bc3081b1f8b93b22eef9d51de646";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const data = await fetch(`${url}`).then(response => response.json());

    console.log(data);

    temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C" ;

    description.innerHTML = data.weather[0].description;

    humidity.innerHTML = data.main.humidity + " %";

    windspeed.innerHTML = data.wind.speed;



}


searchBtn.addEventListener('click',()=>{
    getWeatherInfo(inputBox.value);
})

