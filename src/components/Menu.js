import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from './Search.js';
import Top from './Top.js';
import New from './New.js';

class Menu extends Component{

  render(){
    return( 
      <Router>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Shortener UI</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
	    <a className="nav-item nav-link active" href="/top">Top 100<span className="sr-only">(current)</span></a>
	    <a className="nav-item nav-link active" href="/new">New<span className="sr-only">(current)</span></a>

          </div>
	 </div>
      </nav>
      <div className="container">
      <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/top">
              <Top />
            </Route>
	    <Route path="/new">
              <New />
            </Route>

      </Switch>
      </div>
    </Router>
    );
  }
}

export default Menu;
