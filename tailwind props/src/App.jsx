import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Try from  './components/Try'
function App() {
  const [count, setCount] = useState(0)
let myOBj = {
  name: "nitin",
  age: 21
}
  return (
    <>

      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>

      <Card channel = "1,2,3" maal = "leleleele" happ = "bhosdike" />
      <Card channel = "2,3,4" maal = "nunnnu" happ = "hihiihi" />
   <Try name = "Nitin" age = "34" />
   <Try name = "AMan" />
    </>
  )
}

export default App