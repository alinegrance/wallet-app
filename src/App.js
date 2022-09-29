import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <h1>-Trybewallet-</h1>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </main>
    );
  }
}
export default App;
