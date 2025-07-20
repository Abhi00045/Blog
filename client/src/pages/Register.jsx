import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import '../main.css'

function Register() {
  return (
    <div id='login-signup' style={styles.container}>
      <div id="right-picture">
      <SignUp id="sign" signInUrl='/login'/>
      </div>
      {/* <div id="left-picture">
        <img id='signup-loginPic' src="./animation1.png" alt=""  />
      </div> */}
    </div>
  )
}

export default Register

const styles = {
  container: {
    display: "flex",
    height: "88vh",
    fontFamily: "sans-serif",
    //  backgroundImage: `url('./background.jpg')`, // Place image in public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius:"25px"
  },
}