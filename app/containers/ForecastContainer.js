var React = require('react');
var openWeatherHelpers = require('../utils/openWeatherHelpers');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentDidMount: function() {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function(nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function(city) {
    openWeatherHelpers.getForecast(city)
      .then(function(data) {
        this.setState({
          city: city,
          forecast: data,
          isLoading: false
        })
      }.bind(this));
  },
  handleClick: function(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function() {
    return (
      <Forecast
        forecast={this.state.forecast}
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        handleClick={this.handleClick}/>
    )
  }
})

module.exports = ForecastContainer;
