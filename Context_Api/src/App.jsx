import React, { useState } from 'react'
import Navbar from './Components/Navbar'
const App = () => {
  const [theme,setTheme] = useState('light')
  return (
    <div>
      App
    <Navbar/>
=    </div>
  )
}

export default App