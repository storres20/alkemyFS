import React from 'react'
import logo from './logo.svg'
import '../../App.css'

import { useAuth0 } from '@auth0/auth0-react'

import { LoginButton } from '../../components/LoginButton/LoginButton'
import { LogoutButton } from '../../components/LogoutButton/LogoutButton'
import { Profile } from '../../components/Profile/Profile'

function Login() {
  const {isAuthenticated} = useAuth0()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to your Personal Finance App.
        </p>
        
        {isAuthenticated ? 
          <>
          <Profile/>
          <LogoutButton/>
          </>
          :
          <LoginButton/>}
        
      </header>
    </div>
  )
}

export default Login