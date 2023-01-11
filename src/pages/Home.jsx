import React from 'react'
import Sidebar from '../common/Sidebar'
import UserChat from '../common/UserChat'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="container">
            <Sidebar/>
            <UserChat/>
            </div>
        </div>
       
    </div>
  )
}

export default Home