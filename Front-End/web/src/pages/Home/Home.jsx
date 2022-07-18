import React from 'react'
import { Link } from 'react-router-dom'

function Home({logout}) {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home