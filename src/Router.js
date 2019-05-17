import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Amber from './components/Amber'
import Dogs from './components/Dogs'





export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/contact" component={Contact}/>
      <Route  path="/amber" component={Amber}/>
      <Route  path="/dogs" component={Dogs}/>


    </Switch>
  )
}

