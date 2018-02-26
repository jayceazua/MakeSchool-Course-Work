import React from 'react';
import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm'

// >> classical example of a container component that maintains state.
class Greeter extends React.Component {
  constructor(props) {
    super(props);
    // same as getInitialState
    this.state = {
      name: props.name,
      message: props.message
    };
    // When defining a method you must bind it within the constructor function
    this.handleNewData = this.handleNewData.bind(this);
  }
  // as the data changes you must use setState method to change the state accordingly
  handleNewData (updates) {
    this.setState(updates)
  }
  // This is a REQUIRED method every component has.
  render() {
    let name = this.state.name;
    let message = this.state.message

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    )
  }
}


// you have define it out of the class constructor - getDefaultProps method
Greeter.defaultProps = {
  name: 'React',
  message: 'This is the default message.'
}

/* ES5
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message.'
    }
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewData: function(updates) {
    this.setState(updates);
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    )
  }

})
*/



module.exports = Greeter;
