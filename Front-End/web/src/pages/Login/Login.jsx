import React from 'react'
import logo from './logo.svg'
import '../../App.css'

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to your Personal Finance App.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a> */}
        <button className='btn btn-info'>Login</button>
      </header>
    </div>
  )
}

export default Login