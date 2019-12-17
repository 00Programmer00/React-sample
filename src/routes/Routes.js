import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import HomeComponent from '../components/Home/HomeComponent'
import AboutComponent from '../components/About/AboutComponent'

class Routes extends PureComponent {
  render () {
    return (
      <div className='app-routes'>
        <BrowserRouter>
          <Switch>
            <Route path='/home' component={HomeComponent} />
            <Route path='/about' component={AboutComponent} />
            <Redirect from='/' to='/home' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

Routes.defaultProps = {}

export default Routes
