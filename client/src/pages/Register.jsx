import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import '../main.css'

function Register() {
  return (
    <div id='login-signup'>
      <div id="right-picture">
      <SignUp signInUrl='/login'/>
      </div>
      <div id="left-picture">
        <img id='signup-loginPic' src="./animation1.png" alt=""  />
      </div>
    </div>
  )
}

export default Register