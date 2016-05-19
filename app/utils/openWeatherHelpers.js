var axios = require('axios');
var moment = require('moment');

var clientKey = "cd6671e390cfd42a4dac42c4c1131fbc";
var param = "&APPID=" + clientKey;

function getRequestURL(city, param) {
  var noSpaceCity = city.replace(/ /g,'')
  var URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + noSpaceCity + param;
  return URL;
}

function formattedDay(day, i) {
  return {
    id: i,
    date: moment(day.dt, "X").format("dddd, MMMM D"),
    minTempC: (day.temp.min -273.15).toFixed(1),
    maxTempC: (day.temp.max - 273.15).toFixed(1),
    minTempF: tempToF(day.temp.min),
    maxTempF: tempToF(day.temp.max),
    weather: day.weather[0].description,
    icon: "wi wi-owm-" + day.weather[0].id,
    humidity: day.humidity
  }
}

function tempToF(temp) {
  return ((temp - 273.15) * 1.8 + 32).toFixed(1)
}

var helpers = {
  getForecast: function(city) {
    var url = getRequestURL(city, param);
    return axios.get(url)
      .then(function (info) {
        return info.data.list.map(function(day) {
          var i = info.data.list.indexOf(day);
          return formattedDay(day, i)
        })
      })
      .catch(function(err) {console.warn('Error in getForecastDates: ' + err)});
  }
}

module.exports = helpers;
