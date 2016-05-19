var React = require('react');
var Loading = require('./loading');
var LineItem = require('./LineItem');


var Detail = function(props) {
  return (

  props.isLoading===true ? <Loading /> :
     <div className="detail">
      <i className={props.weather.icon}></i>
      <LineItem item={props.weather.date} />
      <LineItem item={props.city}/>
      <LineItem item={props.weather.weather}/>
      <LineItem label="High" item={props.weather.maxTempC} scale="°C"/>
      <LineItem label="Low" item={props.weather.minTempC} scale="°C"/>
      <LineItem label="Humidity" item={props.weather.humidity} scale="%"/>
    </div>
  )
}


module.exports = Detail;
