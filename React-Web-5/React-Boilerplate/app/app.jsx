import React from 'react';
import ReactDOM from 'react-dom';

var objOne = {
  name: 'Jayce',
  location: 'San Francisco'
}

// object spread just like array spread ...
var objTwo = {
  age: 25,
  ...objOne
}

console.log(objTwo)

ReactDOM.render(
  <h1>React boilerplate app !</h1>,
  document.getElementById('app')
);
