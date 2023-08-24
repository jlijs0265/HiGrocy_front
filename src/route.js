import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./pages/order";
import OrderList from "./pages/orderList";
import ProductMechine from "./pages/productMechine";
import Product from "./pages/product";
import ProductRequest from "./pages/productRequest";
import Process from "./pages/process";
import RawMaterial from "./pages/rawMaterial";
import Storage from "./pages/storage";
import WareHousing from "./pages/wareHousing";
import TestPage from "./pages/testpage";

export default function Higorcy_Router() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/orderlist">
            <OrderList />
          </Route>
          <Route path="/pm">
            <ProductMechine />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/production/requestList">
            <ProductRequest />
          </Route>
          <Route path="/process">
            <Process />
          </Route>
          <Route path="/pr">
            <ProductRequest />
          </Route>
          <Route path="/raw_material">
            <RawMaterial />
          </Route>
          <Route path="/storage">
            <Storage />
          </Route>
          <Route path="/wh">
            <WareHousing />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
