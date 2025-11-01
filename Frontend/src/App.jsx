import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './Components/Signup'
import Courses from './course/Courses'
import {useAuth} from "../src/context/AuthProvider.jsx"
function App() {
  const [count, setCount] = useState(0)
  const [authUser,setAuthUser]=useAuth()
  return (
    <>
      
        <div>
          <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/courses' element={authUser?<Courses/>:<Navigate to="/signup"/>} />
          <Route  path='/signup' element={<Signup/>}/>
        </Routes>
        </div>
    </>
  )
}

export default App
