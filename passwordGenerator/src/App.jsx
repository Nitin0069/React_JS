import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {useState, useCallback} from 'react'

function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false);
const [characterAllowed, setCharacterAllowed] = useState(false);
const [password, setPassword] = useState("")
const passwordGenerator = ( () => {
let pass = ""
let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

if (numberAllowed) {
  str += "01223456789"
  }
  if (characterAllowed) {
    str += "!@#$%^&*"
}

for (let i = 0; i < length; i++ ) {
  const randomIndex = Math.floor(Math.random() * str.length)
}
pass += str[randomIndex]
},[length,numberAllowed,characterAllowed,setPassword])
  
return (
    <>
       < h1 className = "text-4xl text-center text-white" > password generator </h1>
    </>
  )
}

export default App
