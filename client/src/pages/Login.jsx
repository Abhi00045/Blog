import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import '../main.css'

function Login() {
  return (
    <div id='login-signup'>
      <div id="left-picture"> picture Bhaki eh bhai</div>
      <div id="right-picture">
      <SignIn signUpUrl="/signup" />
      </div>
    </div>
  )
}

export default Login