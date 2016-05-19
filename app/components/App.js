var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var Credit = require('./Credit');
var Link = require('react-router').Link;

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <nav className="navbar navbar-default navbar-fixed-top" id="nav">
          <Link to="/"><span className="big-white foat-left">Weather App</span></Link>
          <GetCityContainer direction="row" />
        </nav>
        {this.props.children}
        <Credit />
      </div>
    )
  }
});

module.exports = App;
