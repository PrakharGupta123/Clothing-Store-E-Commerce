import './App.css';
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Nav from './components/Nav.jsx'
import Productpage from './components/Productpage.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
function App() {

  return (
 <>
  <Router>
 <Nav/>
 <Switch>
 <Route path="/productlist"><Products/></Route>
 <Route path="/singleproduct"><Productpage/></Route>
 <Route path="/cart"><Cart/></Route>
 </Switch>
 </Router>
 </>
  )
}

export default App;
