import Home from "./pages/Home/Home";
import Pet from "./pages/Pet/Pet";
import './style.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route path="/pet/:petName">
            <Pet/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
