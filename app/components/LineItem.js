var React = require('react');



function LineItem (props) {
  var LineItemCode;

    if (props.label) {
      LineItemCode = <h2 className="fine-white">{props.label}: {props.item}{props.scale}</h2>
   } else {
      LineItemCode = <h2 className="fine-white">{props.item}</h2>
    }

  return (
    LineItemCode
  )
}

module.exports = LineItem;
