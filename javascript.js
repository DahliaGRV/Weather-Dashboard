var APIKey = "d04d2f1df5dd2ea01f44e738465381d1";
var city = "Seattle";
var lat = 0;
var lon = 0;
var cities = [];

$("#search").on("click",function(){
city = document.getElementById("floatingTextarea").value;
var lastCity= [localStorage.setItem("city", city)];
// lastCity=localStorage.getItem(city) ? JSON.parse(localStorage.getItem(city)) : [];
for(let i=0;i<lastCity.length; i++){
  document.querySelectorAll("list-group-item").textContent =lastCity[i];
}
getCity();
})

function getCity(){
  fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + APIKey)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    console.log(data[0].lat);
    console.log(data[0].lon);
    lat=data[0].lat;
    lon=data[0].lon;
    getWeather();
  });

};
function getWeather(){
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + APIKey)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    console.log(data.current.temp);
    console.log(data.current.wind_speed);
    console.log(data.current.humidity);
    console.log(data.current.uvi);

    var currentDay = moment().format("MMM Do, YYYY [at] hh:mm:ss");
    $("#currentDay").text(currentDay);
    var temp = document.getElementById("temp").textContent=(data.current.temp);
    var wind = document.getElementById("wind").textContent=(data.current.wind_speed);
    var humidity = document.getElementById("humidity").textContent=(data.current.humidity);
    var uvi = document.getElementById("uvi").textContent= (data.current.uvi);
    get5Day();
  })
};
function get5Day(){
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+APIKey)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// API key = 7c167bf4666c00f536de86a9c3adcc85



