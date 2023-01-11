import React from 'react'
import { useState } from 'react'
import { collection,where,query, getDoc, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config';
import { useContext } from 'react';
import { AuthContext } from '../Redux/AuthContext';
const Search = () => {
  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null)

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async()=>{
    console.log(username);
    const q = query(collection(db,"users"),where("displayName" , "==" ,username))

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setUser(doc.data())
    })
  }
  const handlekey = e =>{
    e.code === "Enter" && handleSearch()
  } 

  const handleSelect = async()=>{
      // check wether the group in firstore
      const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
      

      try{
        const res = await getDoc(db,"chats",combineId);
        if(!res.exist()){
          // create chat 
          await setDoc(doc,(db,"chats",combineId),{messages:[]})


          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combineId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            [combineId + ".date"]: serverTimestamp(),
          });
          
          await updateDoc(doc(db, "userChats", user.uid), {
            [combineId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            },
            [combineId + ".date"]: serverTimestamp(),
          });


        }
      }catch(e){

      }

      // create user chat
  }
  return (
    <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find The User' onKeyDown={handlekey} onChange={(e)=> setUsername(e.target.value)}/>
            </div>

            {user && <div className="userChat" onClick={handleSelect}>
              <img src={user.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{user.displayName}</span>
              </div>
            </div>}

    </div>
  )
}

export default Search