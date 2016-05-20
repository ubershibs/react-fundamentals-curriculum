var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var Credit = require('./Credit');
var Link = require('react-router').Link;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../../css/transitions.css');

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <nav className="navbar navbar-default navbar-fixed-top" id="nav">
          <Link to="/"><span className="big-white">Weather App</span></Link>
          <GetCityContainer direction="row" />
        </nav>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children,{key: this.props.location.pathname})}
            </ReactCSSTransitionGroup>
        <Credit />
      </div>
    )
  }
});

module.exports = App;
