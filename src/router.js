import React from "react";
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoadableComponent from "./plugins/loadable";

const Layout = LoadableComponent(() => import("./pages/layout"));
const Home = LoadableComponent(() => import("./pages/home"));
const Detail = LoadableComponent(() => import("./pages/detail"));
const Login = LoadableComponent(() => import("./pages/login"));
const Write = LoadableComponent(() => import("./pages/write"));


const AppRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" render={() =>
          <Layout>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/write' component={Write}></Route>
            <Redirect to="/" />
          </Layout>
        } />
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;