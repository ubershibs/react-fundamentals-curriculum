var React = require('react');

var Credit = React.createClass({
  render: function () {
    return (
      <div className="credit">
        Coded by <a href="http://lukewalker.org">Luke Walker</a>. Inspired by <a href="https://github.com/ReactjsProgram/react-fundamentals-curriculum">Tyler McGinnis & the ReactJS Program</a>
      </div>
    )
  }
});

module.exports = Credit;
