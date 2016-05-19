var React = require('react');

function GetCity(props) {

if(props.direction === "column") {
  return (
    <form onSubmit={props.onSubmitInput}>
      <div className="form-group">
        <input type="text" onChange={props.onUpdateInput} value={props.cityInput} placeholder="New York, NY" className="form-control" />
      </div>
      <div className="col-sm-4 col-sm-offset-4">
        <button type="submit" className="btn btn-lg btn-success">Get Weather!</button>
      </div>
    </form>
  )
} else {
return(
  <form className="navbar-form navbar-left" onSubmit={props.onSubmitInput} id="nav-form">
    <div className="form-group">
      <input type="text" onChange={props.onUpdateInput} value={props.cityInput} placeholder="New York, NY" className="form-control" />
    </div>
    <button type="submit" className="btn btn-success">Go!</button>
  </form>
)
}
}
module.exports = GetCity;
