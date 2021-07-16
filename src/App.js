import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShowData from './components/counter';
import { Provider } from 'react-redux';
import store from './store/store';
import HooksShowData from './components/UsingHooksCounter';
import IceCreamCounter from './components/iceCreamCounter';
import UsingPayload from './components/UsingPayloadCounter';
import UsingMapStateToProps from './components/UseOfMapStateToProps';
import FetchAPIData from './components/FetchAPIData';
import UserDetails from './components/userDetailsAPI';







function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
        <ShowData />
        <HooksShowData />
        <IceCreamCounter/>
        <UsingPayload/>
        <UsingMapStateToProps />
        <UsingMapStateToProps/>
          <Router>
            <Switch>
              <Route exact path="/" component={FetchAPIData} />
              <Route exact path="/user/:id" component={UserDetails} />
            </Switch>
          </Router>
          {/* <FetchAPIData/>
        <UserDetails/>
         */}
        </div>
      </Provider>

    </div>

  );
}

export default App;
