import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import {thunk} from "redux-thunk";

import reducers from "./reducers";

//Esto no se porque lo hace, aquí vamos a implementar las herramientas de desarrollo redux
//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const createStoreWithMiddleware = applyMiddleware(thunk)(((window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f)(createStore)));

import Home from "./components/home";
//Traemos el componente resultados
import Results from "./components/results";

import "./style/main.scss";
import RecentPosts from "./components/recentPosts";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        {/*Vamos a definir aqui las rutas*/}
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
