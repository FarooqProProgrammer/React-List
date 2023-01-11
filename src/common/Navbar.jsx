import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">
             Chat
        </span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1673389126570-258b29950865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <span>Farooq</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar