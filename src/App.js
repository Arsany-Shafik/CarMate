import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Market from './components/market'
import Forget from './components/forgot'
import Reset from './components/reset'
import AddProduct from './components/addproduct'


function App(userToken) {
      
  return (
    

    <Router>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/forgot" element={<Forget />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/addproduct" element={<AddProduct />} />

          </Routes>
        
    </Router>
  )
}

export default App