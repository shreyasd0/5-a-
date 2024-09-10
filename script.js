document.addEventListener("DOMContentLoaded",function(){
    const apikey="b1693ed7ad181ad79817cc99d0523aa3";
    const featchWeatherMapButton=document.getElementById("fetchWeather");
    const cityInput=document.getElementById("cityInput");
    const weatherResult=document.getElementById("weatherResult");


    featchWeatherMapButton.addEventListener("click",function(){
        const city=cityInput.value;
        if(city.trim()==""){
            alert("please enter a city name");
            return;
        }
        const apiUrl=
        `https://api.openWeathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data) => {
            const temperature=data.main.temp;
            const WeatherDescription=data.weather[0].description;
            const weatherOutput=`<p>Temperature:${temperature}&deg;c</p>
            
            <p>weather:${WeatherDescription}</p>`;
            weatherResult.innerHTML=weatherOutput;
        })
        .catch((error)=>{
            console.error("error fetching weather data:",error);
            weatherResult.innerHTML="weather data not available";
        });

    });
});