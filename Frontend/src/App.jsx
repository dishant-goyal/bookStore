import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import {Routes,Route} from "react-router-dom"
import Signup from './Components/Signup'
import Courses from './course/Courses'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div>
          <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/courses' element={<Courses/>}/>
          <Route  path='/signup' element={<Signup/>}/>
        </Routes>
        </div>
    </>
  )
}

export default App
