const apiKey = "25b759d735d6b1f6ab9526db19df7759";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Surabaya";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.getElementById("degreeinfo").innerHTML=Math.round(data.main.temp) + "&deg;C";
    document.getElementById("cityname").innerHTML=data.name;
    document.getElementById("windspeedinfo").innerHTML="Speed : " + data.wind.speed + "km/h" ;
    document.getElementById("humidityinfo").innerHTML="Humidity : " + data.main.humidity + "%";


}

checkWeather()
