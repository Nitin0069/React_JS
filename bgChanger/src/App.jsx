import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  let [color, setColor] = useState("violet")

  let changecolor = (color) => {
setColor(color)
  }

  return (

 <div
      className="min-h-screen"
      style={{ backgroundColor: color }} >
       

    <Button chng = {changecolor} />
   </div>
    )
}

export default App
