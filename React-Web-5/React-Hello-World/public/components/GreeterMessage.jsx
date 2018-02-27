import React from 'react';

// Presentational Component - takes props and renders it to the client.
class GreeterMessage extends React.Component {
  render () {

    var name = this.props.name;
    var message = this.props.message

    return (
      <div>
        <h1>Hello, {name}!</h1>
      <p>{message}</p>
      </div>
    );
  }
}


/* ES5 
var GreeterMessage = React.createClass({
  render: function () {

    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});
*/


module.exports = GreeterMessage;
