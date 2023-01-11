import React from 'react'
import Img from "../assets/image1.png"
import Attach from "../assets/Attach.png"
const Input = () => {
  return (
    <div className='Input'>
        <input type="text" placeholder='Type Something.... ' />
        <div className="send">
            <img src={Attach}  alt="" />
            <input type="file"  style={{display:"none"}} id="file"/>
            <label htmlFor='file'>
                <img src={Img} alt="" srcset="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input