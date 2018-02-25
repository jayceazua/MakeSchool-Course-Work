// Building a component:
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  )
}


// Ex: How Components refer to other Components
function App() {
  return (
    <div>
      <Welcome name="Jayce"/>
    <Welcome name="Roan"/>
      <Welcome name="Mike"/>
    </div>
  )
}

// Extract UserInfo component - that renders an Avatar next to the user's name
function UserInfo(props) {
  return (
    <div className="UserInfo">
      // Extracted and placed into the UserInfo component
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>

    </div>
  )
}

// Extract Avatar from Comment component
function Avatar(props) {
  /*
    The Avatar does not need to know that it is being rendered inside a Comment.
    >> This is why we have given its prop a more generic name:
        user rather than author.
    Recommended naming props from the component's own point of view,
      rather than the context in which it is being used.
  */
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

// Comments Component
function Comment(props) {
  /*
    This component can be tricky to change because of all the nesting,
     and it is also hard to reuse individual parts of it.
     Let’s extract a few components from it.
  */
  return (

    <div className="Comment"> // Start of wrapper div
      // Another Component
      <UserInfo user={props.author} />

      <div className="Comment-text">
        {props.text}
      </div>

      <div className="Comment-date">
        {formatDate(props.date)}
      </div>

    </div> // End of wrapper div
  );
}



/*
Props is a way to pass data into a component when you first start it.


A good rule of thumb is that if a part of your UI is used several times
(Button, Panel, Avatar),
or is complex enough on its own
(App, FeedStory, Comment),
it is a good candidate to be a reusable component.

>> A component must never modify its own props.! <<

>> These are called "pure" function:

function sum(a, b) {
  return a + b;
}

>> Impure function
function withdraw(account, amount) {
  acount.total -= amount;
}

Strict Rule of React:
 >> All React components must act like pure functions
    with respect to their props.

State -  allows React components to change their output over
time in response to user actions, network responses, and anything else,
without violating this rule.

*/

class Clock extends React.Component {
// React will call this constructor
  constructor(props) {
    super(props);
    //it initializes this.state with an object including the current time.
    this.state = {date: new Date()};
  }

  // >> Set up a timer whenever Clock is rendered to the DOM for the first time.
  //>> lifecycle hooks
  componentDidMount() {
    //>> we save the timerId on this
    this.timerID = setInterval( () => this.tick(), 1000)
  }
  // >> Clear that timer when DOM produced by Clock is removed.
  //>> lifecycle hooks
  componentWillUnmount() {
    //>> if the clock component is ever removed React will call the componentWillUnmount
    //so the timer is stopped.
    clearInterval(this.timerID)
  }
//every second the browser calls the tick method
  tick() {
    //Clock component schedules a UI update by calling setState
    this.setState({
    //with an object containing the current time
      date: new Date()
    })
  }
// React will later call this method - this tells React what to display from
//>> this component.
  render() {
    // calls this render method several times over and over
    // to know what it should display on the screen.
    return (
      <div>
        <h1>Hello, world!</h1>
      //the this.state.date will be different and the render output will include
      //the updated time. - it will continue to update the DOM accordingly
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}


function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

/*
// Render to the UI
ReactDOM.render(
  ,
document.getElementById('root')
)

State is similar to props, but it is private
and fully controled by the component

Local State is a feature available only to classes.

/*
// Introducing JSX
function formatName(user) {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: 'Jayce',
  lastName: "Azua"
}


function getGreeting(user) {
  if (user) {
    return (
      <h1> Hello, {formatName(user)}! </h1>
    )
  }
  return (
    <h1> Hello, Stranger </h1>
  )
}

// Components are literally JavaScript functions
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}.
    </h1>
  )
}
/*
// Same as above just written in ES6
class Welcome extends React.Component {
  render() {
    return (
      <h1>
        Hello, {props.name}.
      </h1>
    )
  }
}

const element = <Welcome name="Roan"/>
// Rendering a Component

ReactDOM.render(
  // user-defined components
  element,
  document.getElementById('root')
);

/*
function tick() {
  const element = (
    <div>
      <h1>
        Hello, {formatName(user)}!
      </h1>
      <h2> It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )

  ReactDOM.render(
  element,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
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

When the data changes, React re-renders the entire component.


JSX represents objects >> babel complies JSX down to React.createElment() calls

React Elements are immutable: you can't change it's children or attributes.
Only updates what is necessary.

ReactDOM compares the element and its children to the previous one, and
only applies the DOM updates necessary to bring the DOM to the desired "state".

When React sees an element representing a user-defined component, it passes
jsx attributes to this component as a single object aka props.

Components can refer to other Components in their output.

>> Extracting Components <<
Do not be afraid to split components into smaller Components.
*/
