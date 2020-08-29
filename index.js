import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
  } from "react-router-dom";
import { render } from "react-dom";
import "./style.css";
import "purecss";

import Logo from "./components/logo";
import TopMenu from "./components/topmenu";
import Upload from "./components/upload";
import BookList from "./components/list";
import Gallery from "./components/gallery";
import Post from "./components/post";

function App() {
  
 const routes =[
  {
    path:'/',
    sidebar: () => <span></span>
   },
   {
    path:'/upload',
    sidebar: () => <BookList/>,
   }
 ]

  return (
    <Router>
      <div className="pure-g">
        <div className="pure-u-1-4 sidemenu">
        <Logo/>
          <Switch>
          {routes.map((route, index) => (
            <Route 
             key={index}
            path={route.path}
            exact={route.exact}
            children={<route.sidebar/>}/>
            ))}
          </Switch>
        </div>
        <div className="pure-u-3-4 main">
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path="/upload" component={Upload} />
              <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
