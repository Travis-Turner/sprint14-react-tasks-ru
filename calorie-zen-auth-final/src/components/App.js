import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import './styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Diary />
          </Route>
          <Route path="/tips">
            <Tips />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
  }
}

export default App;
