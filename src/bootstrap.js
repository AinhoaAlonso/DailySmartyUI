import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

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
