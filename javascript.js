var APIKey = "d04d2f1df5dd2ea01f44e738465381d1";
var city = "Seattle";
var lat = 0;
var lon = 0;
var cities = [];
var listGroup = document.querySelector(".list-group");

function getCities(){
  var storedCities = JSON.parse(localStorage.getItem("cities"));
  console.log(storedCities);
  for(i=0;i<storedCities.length;i++) {
  var cityList= document.createElement("li");
  cityList.textContent = storedCities[i];
  listGroup.appendChild(cityList);
  cities.push(storedCities[i]);

  };


}
getCities();
$("#search").on("click",function(){
city = document.getElementById("floatingTextarea").value;
cities.push(city);
localStorage.setItem("cities", JSON.stringify(cities));
// var storedCities = JSON.parse(localStorage.getItem("cities"));
var cityList= document.createElement("li");
cityList.textContent = city;
listGroup.appendChild(cityList);

getCity();
});

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
    var temp = document.getElementById("temp").textContent=(data.current.temp + '°');
    var wind = document.getElementById("wind").textContent=(data.current.wind_speed);
    var humidity = document.getElementById("humidity").textContent=(data.current.humidity + "%");
    var uvi = document.getElementById("uvi").textContent= (data.current.uvi);
    
    
    console.log(data.daily[0].temp.day);
    console.log(data.daily[0].wind_speed);
    console.log(data.daily[0].humidity);

    var nextDay = moment().add(1,'day').format("MMM Do, YYYY");
    $("#card1").text(nextDay);
    var temp1 = document.getElementById("temp1").textContent=(data.daily[0].temp.day + '°');
    var wind1 = document.getElementById("wind1").textContent=(data.daily[0].wind_speed);
    var humidity1 = document.getElementById("humidity1").textContent=(data.daily[0].humidity + "%");

    console.log(data.daily[1].temp.day);
    console.log(data.daily[1].wind_speed);
    console.log(data.daily[1].humidity);

    var nextDay = moment().add(2,'days').format("MMM Do, YYYY");
    $("#card2").text(nextDay);
    var temp2 = document.getElementById("temp2").textContent=(data.daily[1].temp.day + '°');
    var wind2 = document.getElementById("wind2").textContent=(data.daily[1].wind_speed);
    var humidity2 = document.getElementById("humidity2").textContent=(data.daily[1].humidity + "%");

    console.log(data.daily[2].temp.day);
    console.log(data.daily[2].wind_speed);
    console.log(data.daily[2].humidity);

    var nextDay = moment().add(3,'days').format("MMM Do, YYYY");
    $("#card3").text(nextDay);
    var temp3 = document.getElementById("temp3").textContent=(data.daily[2].temp.day + '°');
    var wind3 = document.getElementById("wind3").textContent=(data.daily[2].wind_speed);
    var humidity3 = document.getElementById("humidity3").textContent=(data.daily[2].humidity+ "%");

    console.log(data.daily[3].temp.day);
    console.log(data.daily[3].wind_speed);
    console.log(data.daily[3].humidity);

    var nextDay = moment().add(4,'days').format("MMM Do, YYYY");
    $("#card4").text(nextDay);
    var temp4 = document.getElementById("temp4").textContent=(data.daily[3].temp.day + '°');
    var wind4 = document.getElementById("wind4").textContent=(data.daily[3].wind_speed);
    var humidity4 = document.getElementById("humidity4").textContent=(data.daily[3].humidity+ "%");

    console.log(data.daily[4].temp.day);
    console.log(data.daily[4].wind_speed);
    console.log(data.daily[4].humidity);

    var nextDay = moment().add(5,'days').format("MMM Do, YYYY");
    $("#card5").text(nextDay);
    var temp5 = document.getElementById("temp5").textContent=(data.daily[4].temp.day + '°');
    var wind5 = document.getElementById("wind5").textContent=(data.daily[4].wind_speed);
    var humidity5 = document.getElementById("humidity5").textContent=(data.daily[4].humidity+ "%");

  })
};


