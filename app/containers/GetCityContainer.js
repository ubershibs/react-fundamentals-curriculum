var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  getInitialState: function() {
    return {
      cityInput: ''
    }
  },
  handleUpdateInput: function(e) {
    this.setState({
      cityInput: e.target.value
    })
  },
  handleSubmitInput: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/forecast/' + this.state.cityInput
    })
  },
  render: function() {
    return(
      <GetCity
        direction={this.props.direction}
        onSubmitInput={this.handleSubmitInput}
        onUpdateInput={this.handleUpdateInput}
        cityInput={this.state.cityInput} />
    )
  }
});

module.exports = GetCityContainer;
