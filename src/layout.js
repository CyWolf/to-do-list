import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectContext from './store/appContext'

import Home from './home'
import TodoSimple from './to-do-list-simple'
import TodoEditable from './to-do-list-contextApi'
import TodoModular from './to-do-list-useHistory'
import TodoModularFetch from './to-do-list-modular-fetch'

function Layout() {
  return (
    <Switch>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/TodoSimple'>
        <TodoSimple />
      </Route>

      <Route exact path='/TodoEditable'>
        <TodoEditable />
      </Route>

      <Route path='/TodoModular'>
        <TodoModular />
      </Route>

      <Route path='/TodoModularFetch'>
        <TodoModularFetch />
      </Route>

    </Switch>
  )
}

export default injectContext(Layout)