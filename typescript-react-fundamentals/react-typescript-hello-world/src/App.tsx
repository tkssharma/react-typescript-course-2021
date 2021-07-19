import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


import React from 'react'
import PropTypes from 'prop-types';

const App = (props) => {
    return (
      <h1>Hello, {props.name}</h1>
    )
}
App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;