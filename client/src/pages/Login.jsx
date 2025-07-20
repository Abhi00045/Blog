import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import '../main.css'

function Login() {
  return (
    <div id='login-signup' style={styles.container}>
      {/* <div id="left-picture">
      </div> */}
      <div id="right-picture">
      <SignIn signUpUrl="/signup" />
      </div>
    </div>
  )
}

export default Login

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


// import React from "react";
// import { SignIn } from "@clerk/clerk-react";

// const Login = () => {
//   return (
//     <div style={styles.container}>
//       {/* Left Image Background */}
//       <div style={styles.leftSection}></div>

//       {/* Right Clerk Auth */}
//       <div style={styles.rightSection}>
//         <div style={styles.clerkCard}>
//           <SignIn signUpUrl="/signup" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "sans-serif",
//      backgroundImage: `url('/background.png')`, // Place image in public folder
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   leftSection: {
//     flex: 1.3,
//   },
//   rightSection: {
//     flex: 1,
//     backgroundColor: "#fff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "30px",
//   },
//   clerkCard: {
//     width: "100%",
//     maxWidth: "400px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
//     padding: "20px",
//     backgroundColor: "#fff",
//   },
// };

// export default Login
