import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContex'
const Navbar = () => {
 const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>

<h2>Sheriyans</h2>
<Nav2/>
    </div>

  )
}

export default Navbar