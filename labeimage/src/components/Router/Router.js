import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from "../Header/Header"
import NavBar from '../NavBar/NavBar'
import PageSignup from '../PageSignup/PageSignup'
import PageLogin from '../PageLogin/PageLogin'
import PageCreateImage from '../PageCreateImage/PageCreateImage'
import PageAllImages from '../PageAllImages/PageAllImages'
import PageAllCollections from '../PageAllCollections/PageAllCollections'
import PageImagesByCollections from '../PageImagesByCollection/PageImagesByCollection'
import PageFilter from '../PageFilters/PageFilter'
import PageSearch from '../PageSearch/PageSearch'
import PageProfile from '../PageProfile/PageProfile'
import PageProfileImagesByCollection from '../PageProfile/PageProfileImagesByCollection'
import PageFeed from '../PageFeed/PageFeed'
import Footer from '../Footer/Footer'
import BarSearch from '../BarSearch/BarSearch'

const Router = () => {
    return (
      <BrowserRouter>
          <Header />
          <NavBar />
          <BarSearch />
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
            <Route exact path="/collection">
              <PageAllCollections />
            </Route>
            <Route exact path="/image/collection/:id">
              <PageImagesByCollections />
            </Route>
            <Route exact path="/image/filters">
              <PageFilter />
            </Route>
            <Route exact path="/search">
              <PageSearch />
            </Route>
            <Route exact path="/profile/:id">
              <PageProfile />
            </Route>
            <Route exact path="/profile/collection/:id">
              <PageProfileImagesByCollection />
            </Route>
            <Route exact path="/feed">
              <PageFeed />
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