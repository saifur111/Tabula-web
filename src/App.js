import React from "react";
import './App.css';
import Home from './components/home/Home';
import Header from './topbar/Header';
import About from './components/about/About';
import Programs from './components/programs/Programs';
import Shop from './components/shop/Shop';
import Blog from './components/blog/Blog';
import Elements from './components/elements/Elements';
import NotFound from './components/notfound/NotFound';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/programs">
            <Programs></Programs>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/elements">
            <Elements></Elements>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>  
  );
}

export default App;
