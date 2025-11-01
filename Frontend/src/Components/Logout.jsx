import React from 'react'
import {useAuth} from "../context/AuthProvider"

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser(null)
        localStorage.removeItem("User")
        alert("logout successfully")
        } catch (error) {   
         console.log(error)   
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout