import {useState, useEffect} from 'react';
import './App.css';

// creating functional components
// to create a React component --> <></> to wrap the inner material in
// pass in an argument of props
// to reference the props, go to the field and change it {props.[variable name]} from line 31 (prop example)
/*
const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age} </h2>
    </>
  )
}

*/ 


// change function App() to a variable and arrow function
// create a variable
// use ternary operators to see if the name shows --> {isNameShowing ? name : 'someone' } = true
// if false --> someone
const App = () => {
  const name = 'Kit';
  // const isNameShowing = false;
  // const isUserLoggedIn = true;

  const [counter, setCounter] = useState(0);

    // Never modify state manually ever in React ex. adding a counter of 100 --> counter = 100; to the useEffect state
  useEffect(() => {
    // alert('Reload')
    // use setCounter as the setter state to change the initial state of useEffect
    // setCounter(100);
    alert("You've changed the counter to " + counter);
  }, [counter]);
  // having an empty dependency array will set the initial load to 100
  // call the counter variable inside array --> remove setCounter inside the use effect to prevent infinite loop

  return (
    <div className="App">
      <h1>Hello {name}, it's time for React!</h1>
      {/* create a button counter */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

      {/* Return the Person component here. It can be duplicated as many times as you want --> <Person /> */}
      
      {/* Prop example 
      <Person name='Kit' lastName='Amreik' age={28}/>
      <Person name='Test' lastName='Person A' age={99}/>
      */}
      {/* you can have curly braces in the prop or have it in quotes */}
  

      {/* Below is a test container for the app
      -------------------
      {
        name ? (
          <>
            test
          </>
        ) : (
          test
        )
      }
      -------------------
      */}
      
    </div>
  );
}

export default App;
