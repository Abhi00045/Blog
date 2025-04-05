import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import '../main.css'

function Login() {
  return (
    <div id='login-signup'>
      <div id="left-picture">
        <img id='signup-loginPic' src="./animation2.png" alt="" />
      </div>
      <div id="right-picture">
      <SignIn signUpUrl="/signup" />
      </div>
    </div>
  )
}

export default Login