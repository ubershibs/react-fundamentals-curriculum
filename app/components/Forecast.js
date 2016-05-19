var React = require('react');
var DailyWeather = require('./DailyWeather');
var Loading = require('./loading')

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}


var Forecast = function(props) {
  return props.isLoading===true ? <Loading /> :
     <div>
      <h1 className="fine-white text-center">{props.city}</h1>
      <div className="day-container">
        {props.forecast.map(function(day) {
          return <DailyWeather key={day.id} handleClick={props.handleClick.bind(null, day)} day={day} />
        })};
      </div>
    </div>
  }

module.exports = Forecast;
