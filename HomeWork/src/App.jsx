import React, { useEffect, useState } from 'react'
import Navbar from './components/Header'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';

// font Regular 16 



const App = () => {



  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        {/* <Route path="/test" component={test} /> */}
      </Switch>
    </div>
  </Router>
  )
}

export default App
