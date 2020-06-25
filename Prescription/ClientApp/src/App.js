import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import SpeechRecognition  from './components/SpeechRecognition';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Prescription from './components/Prescription';
import NavigationBar from './components/NavigationBar';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <>
        <Route exact path='/' component={NavigationBar} />
            <Route path='/counter' component={Counter} />
            <Route path='/prescription' component={Prescription} />
            <Route path='/speech' component = {SpeechRecognition} />
            <AuthorizeRoute path='/fetch-data' component={FetchData} />
           <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </>
    );
  }
}
