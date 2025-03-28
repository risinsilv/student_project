import { useState } from 'react'

import './App.css'
import Login from '../Pages/Login/Login'
import Students from '../Pages/Students/Students'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import route from '../Navigation/Navigation'
function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to={'/Login'} />}></Route>
        {route.map((val, index) =>
          <Route key={index} path={val.path} element={val.component}></Route>
        )}
      </Routes>
    </>
  )
}

export default App
