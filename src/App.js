import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {Provider} from "react-redux";

import store from "./store";
import Home from "./pages/home";
import Hot from "./pages/hot";
import Message from "./pages/message";
import Me from "./pages/me";
import MTabBar from "./component/mTabbar"
import "./App.css"

function App() {
  return (
    <Router initialEntries={['/index']}>
      <div className="App">
        <Provider store={ store }>
          <Switch>
            <Route exact path='/'>
              <Redirect to={'/index'}/>
            </Route>
            <Route exact path='/index'>
              <Home/>
            </Route>
            <Route exact path='/hot'>
              <Hot/>
            </Route>
            <Route exact path='/message'>
              <Message/>
            </Route>
            <Route exact path='/me'>
              <Me/>
            </Route>
          </Switch>
          <MTabBar/>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
