import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from "../Header/Header"
import PageSignup from '../PageSignup/PageSignup'
import PageLogin from '../PageLogin/PageLogin'
import PageCreateImage from '../PageCreateImage/PageCreateImage'
import PageAllImages from '../PageAllImages/PageAllImages'
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
            <Route exact path="/createimage">
              <PageCreateImage />
            </Route>
            <Route exact path="/image">
              <PageAllImages />
            </Route>
            <Route path="/">
              <div>Opa! Erro 404!</div>
            </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
    )
}

export default Router