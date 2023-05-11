import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

let counter = 1

ReactDOM.render(
  <App counter={counter} />, 
  document.getElementById('root')
)
