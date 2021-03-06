import React from 'react';
import ReactDOM from 'react-dom';

import Greeter from 'Greeter';

/*========== ========== ========== ========== ==========*/
ReactDOM.render(
    <Greeter />, // <- main container component.
  document.getElementById('root')
);

/*========== ========== ES5 Component Building ========== ==========*/
/*


>>> Webpack
bundle third party dependencies.
scaling separate files



>>>


/* Practice for classes  - Object Oriented Programming/ Functional Programming */
/*
class Person {
  // body of the class is defined...
// constructor function is automatically called when you make a new instance of a class.
  constructor(name = 'Anonymous', age = 0) {
    this.name = name,
    this.age = age
  }
  getGreeting() {
    return `Welcome, ${this.name}.`
  }
  toString() {
    return JSON.stringify(this)
  }
  // getDescription
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

// extends keyword inherits all the properties and methods from the class you are extending from
class Child extends Person {
  constructor(name, age, like) {
    // set the parents functions properties by calling its constructors' function
    // call parents' constructors function - using super()
    super(name, age);
    this.like = like
  }
  getGreeting() {
    return `Hiii!! My name is ${this.name} and I like ${this.like}.`
  }

}

class Baby extends Person {
// no need to call the constructor function with the super function since we ar not overriding any properties.
  getGreeting() {
    return `wahhhhh !!!`
  }
}

// call it as a function.
// ... arguments passed are available in the constructor functions
var me = new Baby('Jayce', 0.9);
*/

/* NOTES:

Separation of Concerns:
 - Reducing couping, increase cohesion.
    >> Couping: the degree to which each program module
                relies on each of the other modules
   >> Cohesion: the degree to which elements of a modules
                belong together.
 - Eliminates cascading changes.
 - Reliance on primitive adstractions

React Components:
 >> A highly cohesive building block for UIs
    loosely coupled with other components.
 >> Use components for Separation of Concerns.
 >> Components are reusable, composable, units.
Keep your components small.



JSX represents objects >> babel complies JSX down to React.createElement() calls

React Elements are immutable: you can't change it's children or attributes.
Only updates what is necessary.

ReactDOM compares the element and its children to the previous one, and
only applies the DOM updates necessary to bring the DOM to the desired "state".

When React sees an element representing a user-defined component, it passes
jsx attributes to this component as a single object aka props.

Components can refer to other Components in their output.

>> Extracting Components <<
Do not be afraid to split components into smaller Components.
==============
State is similar to props, but it is private
and fully controled by the component

Local State is a feature available only to classes.

Strict Rule of React:
 >> All React components must act like pure functions
    with respect to their props.

State -  allows React components to change their output over
time in response to user actions, network responses, and anything else,
without violating this rule.

Props is a way to pass data into a component when you first start it.

A component may choose to pass its state down as props to its child components
A component must never modify its own props!


========== Perfected Notes ==========
>>> Bundlers
Bundlers take JS and CSS code written as separate modules,
 and combine them together into a few files better optimized for browsers.
- Research: Webpack or Browserify

 >>> Elements
Do not confuse elements with components.
An element describes what you want to see on the screen.
React elements are immutable.
Typically, Elements are not used directly, instead get returned from components.

>>> Components
They are small, reusable pieces of code that return a React Element to be
 rendered to the page
Better to use ES6 Classes
Components can return other components, arrays, strings, numbers.

>>> Props
They are inputs to a React component.
Data passed down from a parent component to a child component.
They should not be modified in any way.
If you need to modify data in response to a user input, or a network response, use 'state' instead.
props.children is available on every component.

>>> State
A component needs state when some data changes over time.
The most important difference between state and props:
  1. props are passed from a parent component
  2. state is managed by the component itself
  3. A component cannot change its props
  4. Can change its state
To do this:
  call this.setState() - ** only components defined as classes can have state. **

> For each particular piece of changing data,
    there should be just one component that “owns” it in its state.
Do not try to synchronize states of two different components.
Instead "lift it up" to their closest shared ancestor, and pass it down as
   props to both of them.

render() is a require method
it examines this.props and this.state and return one of the following:
React Elements.
String and numbers - rendered as text nodes
Portal - review
Booleans - render nothing: review
- should be pure - meaning it does not modift component state.
If you need to interact with the browser, perform your work in componentDidMount()


the constructor is the right place to initialize state
also used to bind event handlers to the class instance.

>>> setState
tells React that this component and its children need to be re-rendered with the update state
think of it as a request rather an immediate command to update the component.
-- use componentDidMount or a setState callback.

setState(updater[, callback])
review more on shouldComponentUpdate
(prevState, props) => stateChange

>>> review mounting
>> componentWillMount
initialization that requires DOM nodes should go here.



*/
