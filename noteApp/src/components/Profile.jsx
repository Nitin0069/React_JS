import React, { useContext } from 'react'
import UserContext from './Context/UserContext'

const Profile = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h1>User: {user}</h1>

            <button onClick={() => setUser('Nitin')}>
                Login
            </button>
        </div>
    )
}

export default Profile