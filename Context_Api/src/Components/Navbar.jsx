import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContex'
const Navbar = () => {

const data = useContext(ThemeDataContext)
console.log(data)
  return (
    <div className='nav'>

<h2>Sheriyans</h2>
<Nav2/>
    </div>

  )
}

export default Navbar