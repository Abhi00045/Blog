import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import '../main.css'

function Register() {
  return (
    <div id='login-signup'>
      <div id="left-picture"> picture Bhaki eh bhai</div>
      <div id="right-picture">
      <SignUp signInUrl='/login'/>
      </div>
    </div>
  )
}

export default Register