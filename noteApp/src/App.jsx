import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Profile'

const App = () => {

    return (
        <UserContextProvider>

            <Profile />

        </UserContextProvider>
    )
}

export default App