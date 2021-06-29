import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Product/Header'
import ProductList from './Product/ProductList'
import ProductDescription from './Product/ProductDescription'
import Contact from './Product/Contact'
import Error from './Product/Error'

function Index() {
    return (
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route
            exact
            path="/"
            component={() => <ProductList name="ProductList" />}
          ></Route>
             <Route path="/product/:id" component={ProductDescription} />
            <Route
            exact
            path="/contact"
            component={() => <Contact name="Contact" />}
          ></Route>
          <Route component={Error}></Route>
          </Switch>
          </BrowserRouter>
    )
}

export default Index
