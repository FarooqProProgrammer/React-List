import React from 'react'
import image from "../assets/download.png"

const Register = () => {
  return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Friendly Chat</span>
                <div className="title">Register</div>
                <form>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password' />
                    <input style={{display:"none"}} type="file" id='file'/>
                    <label htmlFor='file' style={{cursor:"pointer"}}>
                        <img style={{width:40,height:40,marginRight:"10px"}} src={image} alt="" />
                        <label>Add Avater</label>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
    </div>
  )
}

export default Register