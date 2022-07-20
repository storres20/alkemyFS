import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

function New({logout}) {
  return (
    <div>
      <NavBar logout={logout} />
      <h1>New</h1>
    </div>
  )
}

export default New