import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContex'

const Button = () => {
   const [theme,setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
setTheme('dark')    }

  return (
    <div>
        <button onClick={changeTheme}> Change ThemeContex {theme} </button>

    </div>
  )
}

export default Button