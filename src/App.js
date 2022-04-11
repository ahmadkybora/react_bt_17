import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './panel/components/Login';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <main className="container-fluid">
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
