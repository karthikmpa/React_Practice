import React from 'react';
import Navigation from './component/Navigation/Navigation';
import Login from './component/Login/Login';
import Main from './component/Main/Main';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/" exact component={Login}></Route>
        </Switch>

    </div>
  );
}

export default App;
