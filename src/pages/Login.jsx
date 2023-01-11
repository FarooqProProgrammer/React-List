import React from 'react'
import image from "../assets/download.png"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config'

const Login = () => {

  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate("/")
     }catch(e){

    }
    
  }
  return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Friendly Chat</span>
                <div className="title">Register</div>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password' />
                    <input style={{display:"none"}} type="file" id='file'/>
                   
                    <button >Sign In</button>
                </form>
                <p>You don't have an account? <Link to={"register"}> Register</Link></p>
            </div>
    </div>
  )
}

export default Login