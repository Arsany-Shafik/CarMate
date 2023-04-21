import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Market from './components/market'
import Forget from './components/forgot'
import Reset from './components/reset'


function App() {
      
  return (
    

    <Router>
      <head>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/forgot" element={<Forget />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        
    </Router>
  )
}

export default App