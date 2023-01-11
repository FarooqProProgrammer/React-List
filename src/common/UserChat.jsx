import React from 'react'
import {BsFillCameraVideoFill,BsThreeDotsVertical} from "react-icons/bs"
import {FaUserFriends} from "react-icons/fa"
import Messages from './Messages'
import Input from './Input'

const UserChat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Farooq</span>
            <div className="chatIcons">
                <BsFillCameraVideoFill className='icon'/>
                <FaUserFriends className='icon'/>
                <BsThreeDotsVertical className='icon'/>
            </div>
        </div>
        
        <Messages/>
        <Input/>
    </div>
  )
}

export default UserChat