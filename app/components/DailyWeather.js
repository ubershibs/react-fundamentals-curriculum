var React = require('react');

var DailyWeather = function(props) {
  return (
    <div className="day" onClick={props.handleClick}>
      <i className={props.day.icon}></i>
      <h2>{props.day.date}</h2>
    </div>
  )
}

module.exports = DailyWeather;
