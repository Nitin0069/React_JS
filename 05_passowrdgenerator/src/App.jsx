import { useState } from 'react'

import './App.css'

function App() {
const  [length , setLength ] = useState(8)
 const [numberAllowed , setNumber] = useState(false);
 const [characterAllowed , setCharacter] = useState(false)
 const  [password, setPassword] = useState("")
  return (
    <>
     <h1 className='text-4xl text-center'> password generator</h1>
    </>
  )
}

export default App
