var APIKey = "d04d2f1df5dd2ea01f44e738465381d1";
var city = "Seattle";
var lat = 0;
var lon = 0;
var cities = [];
var listGroup = document.querySelector(".list-group");

function getCities(){
  var storedCities = JSON.parse(localStorage.getItem("cities"));
  console.log(storedCities);
  if(storedCities){
  for(i=0;i<storedCities.length;i++) {
  var cityList= document.createElement("li");
  cityList.textContent = storedCities[i];
  listGroup.appendChild(cityList);
  cities.push(storedCities[i]);

  cityList.setAttribute("style","border:1px grey solid; border-raidus:40%; padding:2%; text-align:center")
  };
};
};
getCities();
$("#search").on("click",function(){
city = document.getElementById("floatingTextarea").value;
cities.push(city);
localStorage.setItem("cities", JSON.stringify(cities));
var cityList= document.createElement("li");
cityList.textContent = city;
listGroup.appendChild(cityList);

cityList.setAttribute("style","border:1px grey solid; border-raidus:40%; padding:2%; text-align:center")

getCity();
});
$(listGroup).children().on("click",function(event){
  console.log(event.target.textContent);
  city = event.target.textContent;
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
    var iconCode = data.current.weather[0].icon;
    console.log(iconCode);
    console.log(data.current.temp);
    console.log(data.current.wind_speed);
    console.log(data.current.humidity);
    console.log(data.current.uvi);

    var currentDay = moment().format("MMM Do, YYYY [at] hh:mm:ss");
    $("#currentDay").text(city + " " + currentDay);
    var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    $('#wicon1').attr('src', iconurl);
    var temp = document.getElementById("temp").textContent=(data.current.temp + '°');
    var wind = document.getElementById("wind").textContent=(data.current.wind_speed);
    var humidity = document.getElementById("humidity").textContent=(data.current.humidity + "%");
    var uvi = document.getElementById("uvi").textContent= (data.current.uvi);
    var uviColor = document.getElementById("uvi");
      
    if(data.current.uvi < 2){
      uviColor.setAttribute("style","background:green");
    } else if (data.current.uvi > 2 && data.current.uvi < 6 ){
      uviColor.setAttribute("style", "background:yellow");
    } else {
      uviColor.setAttribute("style","background:red");
    }

    var nextDay = moment().add(1,'day').format("MMM Do, YYYY");
    $("#card1").text(nextDay);
    var iconurl = "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png";
    $('#wicon2').attr('src', iconurl);
    var temp1 = document.getElementById("temp1").textContent=(data.daily[0].temp.day + '°');
    var wind1 = document.getElementById("wind1").textContent=(data.daily[0].wind_speed);
    var humidity1 = document.getElementById("humidity1").textContent=(data.daily[0].humidity + "%");

    var nextDay = moment().add(2,'days').format("MMM Do, YYYY");
    $("#card2").text(nextDay);
    $('#wicon3').attr('src', iconurl);
    var iconurl = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png";
    var temp2 = document.getElementById("temp2").textContent=(data.daily[1].temp.day + '°');
    var wind2 = document.getElementById("wind2").textContent=(data.daily[1].wind_speed);
    var humidity2 = document.getElementById("humidity2").textContent=(data.daily[1].humidity + "%");

    var nextDay = moment().add(3,'days').format("MMM Do, YYYY");
    $("#card3").text(nextDay);
    var iconurl = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png";
    $('#wicon4').attr('src', iconurl);
    var temp3 = document.getElementById("temp3").textContent=(data.daily[2].temp.day + '°');
    var wind3 = document.getElementById("wind3").textContent=(data.daily[2].wind_speed);
    var humidity3 = document.getElementById("humidity3").textContent=(data.daily[2].humidity+ "%");

    var nextDay = moment().add(4,'days').format("MMM Do, YYYY");
    $("#card4").text(nextDay);
    var iconurl = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png";
    $('#wicon5').attr('src', iconurl);
    var temp4 = document.getElementById("temp4").textContent=(data.daily[3].temp.day + '°');
    var wind4 = document.getElementById("wind4").textContent=(data.daily[3].wind_speed);
    var humidity4 = document.getElementById("humidity4").textContent=(data.daily[3].humidity+ "%");


    var nextDay = moment().add(5,'days').format("MMM Do, YYYY");
    $("#card5").text(nextDay);
    var iconurl = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png";
    $('#wicon6').attr('src', iconurl);
    var temp5 = document.getElementById("temp5").textContent=(data.daily[4].temp.day + '°');
    var wind5 = document.getElementById("wind5").textContent=(data.daily[4].wind_speed);
    var humidity5 = document.getElementById("humidity5").textContent=(data.daily[4].humidity+ "%");

  })
};



