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
          <header><h4>Ha Xuan Long Tinh: react/redux simple shop demo </h4></header>
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

    // Are we in development mode?
  // if (module.hot) {
  //
  //   // Whenever a new version of App.js is available
  //   module.hot.accept(function () {
  //     // Require the new version and render it instead
  //     console.log('alo');
  //     const NextApp = require('./main')
  //     Rdom.render((
  //       <Provider store={store}>
  //         <Router history={browserHistory} routes={rootRoute} />
  //       </Provider>
  //       ), document.getElementById('main-app'));
  //   })
  // }
});
