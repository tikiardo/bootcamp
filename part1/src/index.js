import React from 'react';
import ReactDOM from 'react-dom';


const Mensaje = ()=>{
return <h1>Hola mundo </h1>

}
const Description = () => {
  return <p>Esta es la app del curso de bootcamp fullstack hola github</p>
}

const App = () => {
 return(
  <div className='App'>
    <Mensaje/>
    <Mensaje/>
    <Mensaje/>
    <Description/>

    
  </div>
  )
}

 

ReactDOM.render(<App/>, document.getElementById('root'))





