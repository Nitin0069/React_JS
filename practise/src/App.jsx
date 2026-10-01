import {useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] = useState(15)
const  chal = () => {
  console.log(counter)
  counter = counter + 1
  setCounter(counter)
  console.log(counter);


}

  return (
    <>
      <h1> hi </h1>
      <button onClick = {chal}> counter {counter} </button>
    </>
  )
}

export default App
