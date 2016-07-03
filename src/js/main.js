import React, { Component } from 'react';
import Rdom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import '../scss/main.scss';

import Home from './containers/Home';
import ProductDetail from './containers/ProductDetail';

import configureStore from './stores/configureStore';



class MainApp extends Component {

  render() {
    return (
      <div id="master">
        <div className="container">
          <header>this is header</header>
          <section>
             {this.props.children}
          </section>
        </div>
      </div>
    );
  };


}


const store = configureStore();


const rootRoute = {
  childRoutes: [
    {
      path: "/",
      indexRoute: { component: Home },
      component: MainApp,
      childRoutes : [ProductDetail]
    }
  ]
};

$(document).ready(()=> {
  Rdom.render((
    <Provider store={store}>
      <Router history={browserHistory} routes={rootRoute} />
    </Provider>
    ), document.getElementById('main-app'));
});
