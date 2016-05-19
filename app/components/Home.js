var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

function Home (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>Enter a City & State</h1>
      <GetCityContainer direction="column" />
    </div>
  )
}

module.exports = Home;
