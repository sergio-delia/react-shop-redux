import './App.css'
import Header from './containers/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'


function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact Component={ProductListing} />
        <Route path='/product/:productId' exact Component={ProductDetail} />
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
