import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './market.css'
import './login.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Market from './components/market'
import Forget from './components/forgot'
import Reset from './components/reset'
import AddProduct from './components/addproduct'
import Onlycars from './components/onlycars'
import Onlyaccessories from './components/onlyaccessories'
import Onlyparts from './components/onlyparts'
import ProductDetails from './components/ProductDetails'
import FavoriteList from './components/favoriteList'
import Rent from './components/rent'
import RentDetails from './components/rentDetails'

function App(userToken) {
      
  return (
    

    <Router>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/forgot" element={<Forget />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/onlycars" element={<Onlycars/>} />
            <Route path="/onlyaccessories" element={<Onlyaccessories/>} />
            <Route path="/onlyparts" element={<Onlyparts/>} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="rents/:productId" element={<RentDetails />} />
            <Route path="/favoriteList" element={<FavoriteList/>} />
            <Route path="/rent" element={<Rent />} />


          </Routes>
        
    </Router>
  )
}

export default App