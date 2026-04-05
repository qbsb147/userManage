import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import { UserProvider } from './components/UserContext'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserRegistration from './components/UserRegistration'
import UserDetail from './components/UserDetail'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/user" element={<UserRegistration/>}/>
            <Route path="/user/:id" element={<UserDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
