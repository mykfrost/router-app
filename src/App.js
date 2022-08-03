import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import { Switch } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      
      <div >
        <div className="content">
          <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/admin" component={Dashboard}/>
          <Route path="/" exact component={Home}/>
          </Switch>
          </div>
        <NavBar />
      </div>
    );
  }
}

export default App;
