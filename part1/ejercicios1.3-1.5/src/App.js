import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const Button = (props) => {
  return 
  <button onClick={props.handleClick}>{props.text}
  </button>;
};



const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const addGoodValue = (value) => {
  setGood(value);
};

const addNeutralValue = (value) => {
  setNeutral(value);
};

const addBadValue = (value) =>{
  setBad(value);
};

  return (
    <div>
    <h2>give feedback</h2>
    <Button handleClick={() => addGoodValue(good + 1)} text="good"></Button>
    <Button
      handleClick={() => addNeutralValue(neutral + 1)}
      text="neutral"
    ></Button>
    <Button handleClick={() => addBadValue(bad + 1)} text="bad"></Button>
    <div/>
  );
};

ReactDOM.render(<App/>, 
  document.getElementById('root')
)
