import React from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
    const {user,logoutTheUser} = useAuth()
  return (
    <h1>
        {user.name} is logged in


        <button onClick={logoutTheUser}>Logout</button>
    </h1>
  )
}

export default Home