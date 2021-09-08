import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tweets from './tweets';
import Trends from './trends';
import Navigation from './navigation'
function App() {
  return (
   <Router >
     <div className="App">
      <Navigation />
     <Switch>
       <Route exact={true} path="/" render={props=> <Tweets {...props}/>}/>
       <Route  path="/trends" render={props=> <Trends {...props} />} />
     </Switch>
    </div>
   </Router>
  );
}

export default App;
