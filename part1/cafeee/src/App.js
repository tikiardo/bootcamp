import React, { useState } from "react"

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistic = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
const all = props.good + props.neutral + props.bad;
var average = 0
var positive = 0

if (all!==0) {
  average = (props.good - props.bad) / all
  positive = (props.good / all) *100
}

if(all===0){
 return <div>no feedback given</div>
}
else {
  return(
    <div>
      <table>
        <tbody>
        <Statistic text= "good" value= {props.good}></Statistic>
        <Statistic text= "neutral" value= {props.neutral}></Statistic>
        <Statistic text= "bad" value= {props.bad}></Statistic>
        <Statistic text= "all" value= {all}></Statistic>
        <Statistic text= "average" value= {average}></Statistic>
        <Statistic text= "positive" value= {positive}></Statistic>
        </tbody>
      </table>
    </div>
  )
}
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodValue = (value) => {
    setGood(value)
  }

  const addNeutralValue = (value) => {
    setNeutral(value)
  }

  const addBadValue = (value) => {
    setBad(value)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => addGoodValue(good + 1)} text="good"></Button>
      <Button handleClick={() => addNeutralValue(neutral + 1)} text="neutral"></Button>
      <Button handleClick={() => addBadValue(bad + 1)} text="bad"></Button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App;
