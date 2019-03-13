// Get user's geolocation
var lat,
  lon,
  tWeather,
  icon,
  celsius,
  farenheit,
  iconNumber,
  minCelsius,
  maxCelsius,
  minF,
  maxF;


$.getJSON('https://ipapi.co/json/', function(data){
  console.log(data);


  // reaching the location API

console.log(data);
    // Finding the latitude and longitude, to be able to find the location
    $.each(data, function(k, v) {});
    lat = data.latitude;
    lon = data.longitude;

    var nlat = lat.toString();
    var nlon = lon.toString();
    if (lat > 0)
    {
      nlat = '+' + nlat;
    }
    if (lon > 0)
    {
      nlon = '+' + nlon;
    }

    nlat = nlat.substring(0, 6);
    nlon = nlon.substring(0, 6);

    $("#latitude").append(nlat);
    $("#longitude").append(nlon);

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=059dcee9c15c93a942eb1f38b72876be", function(weatherData) {
      $.each(weatherData, function(j, b) {});
      console.log(weatherData);
      // fetch image and display weather and icon down below
      tWeather = weatherData.main.temp;
      iconNumber = weatherData.weather[0].icon;

      icon = ("http://openweathermap.org/img/w/" + iconNumber + ".png");
      $("#graphic").append('<img src="' + icon + '"/>');

      $('#description').append(weatherData.weather[0].description);
      $('#city').append(weatherData.name);

      kph = weatherData.wind.speed.toFixed(1);
      // convert km/h to mph
      mph = Math.floor(kph * 1.61);
      $("#windSpeed").append(mph + " mi/h");

      $("#pressure").append(weatherData.main.pressure + "º");
      $("#humidity").append(weatherData.main.humidity + "%");
      minF = Math.floor(weatherData.main.temp_min * 9/5 - 459.67);
      maxF = Math.floor(weatherData.main.temp_max * 9/5 - 459.67);

      // translate Kelvin to Celsius
      celsius = Math.floor(weatherData.main.temp - 273.15);

      minCelsius = Math.floor(weatherData.main.temp_min - 273.15);
      maxCelsius = Math.floor(weatherData.main.temp_max - 273.15);
      // translate Kelvin to Farenhait T(K) × 9/5 - 459.67
      farenheit = Math.floor(weatherData.main.temp * 9 / 5 - 459.67);

      // // display celsius by default
      // $('#celsius').append(celsius + 'ºC');
      // $("#min").append( minCelsius + 'ºC');
      // $("#max").append( maxCelsius + 'ºC');

      // display Farenheit by default
      $('#farenheit').append(farenheit + 'ºF');
      $("#min").append( minF + 'ºF');
      $("#max").append( maxF + 'ºF');
    });


  // background code here
});


var switchButton = document.querySelector('.switch-button');
var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');
var activeSwitch = document.querySelector('.active');

function switchLeft() {
  switchBtnRight.classList.remove('active-case');
  switchBtnLeft.classList.add('active-case');
  activeSwitch.style.left = '0%';

  $('#farenheit').empty();
  $('#min').empty();
  $('#max').empty();
  $('#celsius').append(celsius + 'ºC');
  $("#min").append(minCelsius + 'ºC');
  $("#max").append(maxCelsius + 'ºC');
  $('#windSpeed').empty();
  $('#windSpeed').append(kph + " km/h");
}

function switchRight() {
  switchBtnRight.classList.add('active-case');
  switchBtnLeft.classList.remove('active-case');
  activeSwitch.style.left = '50%';

  $('#celsius').empty();
  $('#min').empty();
  $('#max').empty();
  $('#farenheit').append(farenheit + 'ºF');
  $('#min').append(minF + "ºF");
  $('#max').append(maxF  + "ºF");
  $('#windSpeed').empty();
  $('#windSpeed').append(mph + " mi/h");

}

switchBtnLeft.addEventListener('click', function() {
  $('#celsius').empty();
  switchLeft();

}, false);

switchBtnRight.addEventListener('click', function() {
  $('#farenheit').empty();
  switchRight();

}, false);
