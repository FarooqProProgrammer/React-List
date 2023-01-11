import React from 'react'
import image from "../assets/download.png"
import { useState } from 'react'
import { auth, db, storage } from '../config'
import {createUserWithEmailAndPassword,onAuthStateChanged,updateProfile} from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc,setDoc} from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const [displatName,setDisplayName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState();
  const navigate = useNavigate();
 

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    const file = e.target[3].files[0]

  
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage,`${displatName}.png`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
      (snapshot) => {

      }, 
      (error) => {
          setError(true)
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateProfile(res.user,{
            displayName:displatName,
            photoURL:downloadURL
          });

          await setDoc(doc(db,"users",res.user.uid),{
            uid:res.user.uid,
            displayName:displatName,
            email:email,
            photoURL:downloadURL
        })

        await setDoc(doc(db,"userChats",res.user.uid),{
          
        })
        navigate("/Home")
        });
      }
    );
 
      }
      catch(e){
        setError(e)
      }

  }


  return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Friendly Chat</span>
                <div className="title">Register</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' onChange={(e)=> setDisplayName(e.target.value)}/>
                    <input type="email" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
                    <input style={{display:"none"}} type="file" id='file'/>
                    <label htmlFor='file' style={{cursor:"pointer"}}>
                        <img style={{width:40,height:40,marginRight:"10px"}} src={image} alt="" />
                        <label>Add Avater</label>
                    </label>
                    <button>Sign Up</button>
                    {error && <span>SomeThing Went Wrong</span>}
                </form>
                <p>You do have an account? <Link to={"/login"}>Login</Link></p>
            </div>
    </div>
  )
}

export default Register