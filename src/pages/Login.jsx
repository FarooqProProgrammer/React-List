import React from 'react'
import image from "../assets/download.png"

const Login = () => {
  return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Friendly Chat</span>
                <div className="title">Register</div>
                <form>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password' />
                    <input style={{display:"none"}} type="file" id='file'/>
                   
                    <button>Sign In</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
    </div>
  )
}

export default Login