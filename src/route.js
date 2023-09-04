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
import Mainpage from "./pages/mainpage";
import JoinPage from "./pages/joinPage";

export default function Higorcy_Router() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          {/* 발주(요청) */}
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
          <Route path="/prlist">
            <ProductRequest />
          </Route>
          <Route path="/process">
            <Process />
          </Route>
          {/* 생산(요청) */}
          <Route path="/pr">
            <ProductRequest />
          </Route>
          {/* 품목(관리) */}
          <Route path="/raw_material">
            <RawMaterial />
          </Route>
          {/* 창고(관리) */}
          <Route path="/storage">
            <Storage />
          </Route>
          {/* 재고(현황) */}
          <Route path="/wh">
            <WareHousing />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          {/* 로그인페이지 */}
          <Route path="/login">
            로그인 페이지
            <JoinPage />
          </Route>
          {/* 환경(메인페이지) */}
          <Route path="/*">
            <Mainpage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
