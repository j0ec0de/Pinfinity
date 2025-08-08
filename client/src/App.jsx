import React from "react"
import NavBar from "./components/NavBar"
import LoginPage from "./pages/LoginPage"
import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage"
import IndexPage from "./pages/IndexPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
        <Route path="/register" element={<RegisterPage />} ></Route>
        <Route path="/explore" element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App