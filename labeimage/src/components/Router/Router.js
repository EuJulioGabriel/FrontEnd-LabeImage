import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Header from "../Header/Header"
import PageSignup from '../PageSignup/PageSignup'
import PageLogin from '../PageLogin/PageLogin'
import Footer from '../Footer/Footer'

const Router = () => {
    return (
      <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <PageLogin />
            </Route>
            <Route exact path="/signup">
              <PageSignup />
            </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
    )
}

export default Router