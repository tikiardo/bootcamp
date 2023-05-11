import ReactDOM from "react-dom"

const rootElement = document.getElementById("root")

const App = (props) => {
return <h1>{props.contadorInicial}</h1>


}

ReactDOM.render(
    <App contadorInicial={0}/>
)